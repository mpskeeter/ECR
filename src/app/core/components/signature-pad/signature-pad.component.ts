import { JsonPipe } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, input, model, output, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signature-pad',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './signature-pad.component.html',
  styleUrl: './signature-pad.component.scss'
})
export class SignaturePadComponent {
  @ViewChild('signPad', {static: false}) signPad!: ElementRef<HTMLCanvasElement>;
  // @Output() signatureSaved = new EventEmitter();
  // signatureSaved = model<string>();
  signatureHeight=input<number>(100);
  signatureWidth=input<number>(450);
  signatureImg = model<string>();
  private sigPadElement: any;
  private context: any;
  private isDrawing!: boolean;

  public ngAfterViewInit(): void {
    this.sigPadElement = this.signPad.nativeElement;
    const width = this.sigPadElement.width;
    const height = this.sigPadElement.height;
    // this.context = this.sigPadElement.getContext('2d');
    const context = this.sigPadElement.getContext('2d');
    // this.context.strokeStyle = '#000';
    context.strokeStyle = '#000';
    var image = new Image();
    image.onload = function() {
      context.drawImage(image, 0, 0, width, height);
    };
    image.src =  this.signatureImg() || '';
    this.context = context;
  }

  onMouseDown(e: any): void {
    // The mouse button is clicked, which means the start of drawing the signature
    this.isDrawing = true;
    const coords = this.relativeCoords(e);
    this.context.moveTo(coords.x, coords.y);
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e: any): void {
    // The mouse button is released, so this means the end of drawing the signature
    this.isDrawing = false;
    // console.log('stopped');
    this.signatureImg.set(this.sigPadElement.toDataURL('image/png'));
  }

  onMouseMove(e: any): void {
    if (this.isDrawing) { // if we're not drawing we need to ignore the events
      const coords = this.relativeCoords(e);
      this.context.lineTo(coords.x, coords.y);
      this.context.stroke();
    }
  }

  clearSignature(): void {
    this.signatureImg.set(undefined);
    this.context.clearRect(0, 0, this.sigPadElement.width, this.sigPadElement.height);
    this.context.beginPath();
  }

  // saveSignature(): void {
  //   this.signatureImg.set( this.sigPadElement.toDataURL('image/png'));
  //   // this.signatureSaved.emit(this.signatureImg!);
  // }

  private relativeCoords(event: any): { x: number, y: number } {
    const bounds = event.target.getBoundingClientRect();
    const cords = {
      clientX: event.clientX || event.changedTouches[0].clientX,
      clientY: event.clientY || event.changedTouches[0].clientY
    };
    const x = cords.clientX - bounds.left;
    const y = cords.clientY - bounds.top;
    return {x, y};
  }
}
