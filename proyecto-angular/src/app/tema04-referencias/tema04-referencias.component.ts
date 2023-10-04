import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tema04-referencias',
  templateUrl: './tema04-referencias.component.html',
  styleUrls: ['./tema04-referencias.component.css']
})
export class Tema04ReferenciasComponent {
  @ViewChild('videoRef') video: ElementRef<HTMLVideoElement> | null = null
  isPaused: boolean = true

  ngAfterViewInit() {
    if (this.video) {
      this.isPaused = this.video.nativeElement.paused
    }
  }

  play(videoRef: HTMLVideoElement) {
    // console.log(videoRef)
    // console.dir(videoRef)
    videoRef.play()
    this.isPaused = false
  }

  pause(videoRef: HTMLVideoElement) {
    videoRef.pause()
    this.isPaused = true
  }

  playSinParam() {
    this.video?.nativeElement.play()
    this.isPaused = false
  }

  changeVolumen(event: Event, videoRef: HTMLVideoElement) {
    const volumen = (event.target as HTMLInputElement).value
    console.log(volumen)

    videoRef.volume = Number(volumen) / 100
  }

}
