import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { DecimalPipe, isPlatformBrowser } from '@angular/common';

interface Counter {
  label: string;
  target: number;
  current: number;
}
@Component({
  selector: 'app-numbers-section',
  imports: [DecimalPipe],
  templateUrl: './numbers-section.html',
  styleUrl: './numbers-section.scss',
})
export class NumbersSection implements AfterViewInit {

  @ViewChild('counterSection') section!: ElementRef;

  counters: Counter[] = [
    { label: 'Famílias atendidas', target: 6000, current: 0 },
    { label: 'Refeições distribuídas', target: 3000, current: 0 },
    { label: 'Voluntários ativos', target: 120, current: 0 },
    { label: 'Projetos realizados', target: 45, current: 0 },
  ];

  private hasAnimated = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // para não quebrar no Servidor (SSR)
    if (!isPlatformBrowser(this.platformId)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Quando 60% da seção estiver visível, a animação começa
        if (entry.isIntersecting && !this.hasAnimated) {
          this.startAnimation();
          this.hasAnimated = true;
          observer.disconnect(); // Para de observar após animar uma vez
        }
      },
      { threshold: 0.7 }
    );

    if (this.section) {
      observer.observe(this.section.nativeElement);
    }
  }

  private startAnimation(): void {
    this.counters.forEach(counter => {
      this.animateCounter(counter);
    });
  }

  private animateCounter(counter: Counter): void {
    const duration = 1500; 
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing de saída (suaviza o final da contagem)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      counter.current = Math.floor(counter.target * easeOut);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        counter.current = counter.target;
      }
    };

    requestAnimationFrame(animate);
  }
}