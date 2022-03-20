import {
  Component,
  OnInit,
  ElementRef,
  AfterViewInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { GestureConfig, GestureController } from '@ionic/angular';

@Component({
  selector: 'app-slide-drawer',
  templateUrl: './slide-drawer.component.html',
  styleUrls: ['./slide-drawer.component.scss'],
})
export class SlideDrawerComponent implements OnInit, AfterViewInit {
  @ViewChild('touchEvent', { read: ElementRef })
  private touchEvent: ElementRef;
  startYtop: number;
  constructor(
    private gestureCtrl: GestureController,
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    const heightTop = Math.floor((window.innerHeight * 90) / 100);
    this.startYtop = heightTop;
    console.log('offset top defoult', this.startYtop);
  }

  onLogPan(event) {
    if (this.touchEvent.nativeElement.scrollTop > 0) {
      event.stopPropagation();
    }
  }

  async ngAfterViewInit() {
    const options: GestureConfig = {
      el: this.element.nativeElement,
      direction: 'y',
      gestureName: 'slide-drawer-swipe',
      onStart: () => {
        this.renderer.setStyle(
          this.element.nativeElement,
          'transition',
          'none'
        );
      },
      onMove: ev => {
        console.log(ev);
        if (ev.deltaY < 0 && ev.startY > this.startYtop) {
          this.renderer.setStyle(
            this.element.nativeElement,
            'transform',
            `translateY(${ev.deltaY}px)`
          );
        }
        if (ev.deltaY > 0 && ev.startY < this.startYtop) {
          this.renderer.setStyle(
            this.element.nativeElement,
            'transform',
            `translateY(${ev.deltaY - 400}px)`
          );
        }
      },
      onEnd: ev => {
        this.renderer.setStyle(
          this.element.nativeElement,
          'transition',
          '0.3s ease-out'
        );
        if (ev.deltaY < -100) {
          this.renderer.setStyle(
            this.element.nativeElement,
            'transform',
            `translateY(-400px)`
          );
        } else if (ev.deltaY > -100 && ev.startY > this.startYtop) {
          console.log('ev startY', ev.startY);
          console.log('startYPhone');

          this.renderer.setStyle(
            this.element.nativeElement,
            'transform',
            `translateY(0)`
          );
        }
        if (ev.deltaY > 50) {
          this.renderer.setStyle(
            this.element.nativeElement,
            'transform',
            `translateY(0)`
          );
        } else if (
          ev.deltaY < 50 &&
          ev.deltaY > 0 &&
          ev.startY < this.startYtop
        ) {
          this.renderer.setStyle(
            this.element.nativeElement,
            'transform',
            `translateY(-400px)`
          );
        }
      },
    };

    const gesture = await this.gestureCtrl.create(options);
    gesture.enable();
  }
}
