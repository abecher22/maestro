import {Component, View, Inject, ViewChild} from 'angular2/core';
import {RendererService} from '../../services/renderer.service';
import {VoiceDecorator} from '../../models/voice.decorator';
import * as _ from 'lodash';
import './stave.style.scss';

@Component({
  selector: 'stave',
  inputs: ['stave']
})
@View({
  templateUrl: 'app/components/stave/stave.template.html'
})
export class StaveComponent {
  static WIDTH : number = 300;
  static HEIGHT : number = 100;

  @ViewChild('canvas') canvas;

  stave: Vex.Flow.Stave;
  canvasSelector: string;
  renderer: RendererService;
  voice: VoiceDecorator;
  notes: Array<Vex.Flow.Note>;
  selectedNoteIndex: number;

  constructor() {
    var notes = [
        new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "q" }),
        new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "q" }),
        new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "q" }),
        new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "q" })
    ];

    notes[0].setStyle({strokeStyle: "blue", fillStyle: 'blue'});

    var voice = new Vex.Flow.Voice({
        num_beats: 4,
        beat_value: 4,
        resolution: Vex.Flow.RESOLUTION
    });

    voice.addTickables(notes);
    var voiceWithNotes = {voice: voice, notes: notes}
    this.voice = new VoiceDecorator(voice, notes);
    this.selectedNoteIndex = 0;
  }

  ngAfterViewInit() {
    this.renderer = new RendererService(this.canvas.nativeElement);
    this.renderer.drawStave(this.stave);
    this.drawVoices();
  }

  drawVoices() {
    this.renderer.drawVoice(this.stave, this.voice.vfVoice);
  }

  goRight() {
    if (this.selectedNoteIndex < 3) {
      this.deselectNotes(this.voice.vfNotes)
      this.selectedNoteIndex += 1;
      this.selectNote(this.voice.vfNotes[this.selectedNoteIndex])
      this.renderer.drawVoice(this.stave, this.voice.vfVoice)
    }
  }

  goLeft() {
    if (this.selectedNoteIndex > 0) {
      this.deselectNotes(this.voice.vfNotes)
      this.selectedNoteIndex -= 1;
      this.selectNote(this.voice.vfNotes[this.selectedNoteIndex]);
      this.renderer.drawVoice(this.stave, this.voice.vfVoice);
    }
  }

  selectNote(note: Vex.Flow.StaveNote) {
    note.setStyle({strokeStyle: 'blue', fillStyle: 'blue'});
  }

  deselectNotes(notes: Array<Vex.Flow.StaveNote>) {
    _.map(notes, function(note) {
      note.setStyle({strokeStyle: 'black', fillStyle: 'black'});
    });
  }

  selectedNote() : Vex.Flow.StaveNote {
    return this.voice.vfNotes[this.selectedNoteIndex];
  }

  deleteNote() {
    this.updateNote('b/4', 'qr');
    this.updateVoice(this.voice.vfNotes);
  }

  raisePitch() {
    let selected = this.selectedNote();
    let key = selected.getKeys()[0];
    let newKey = this.raiseKey(key);

    this.updateNote(newKey, 'q');
    this.updateVoice(this.voice.vfNotes);
  }

  lowerPitch() {
    let selected = this.selectedNote();
    let key = selected.getKeys()[0];
    let newKey = this.lowerKey(key);

    this.updateNote(newKey, 'q');
    this.updateVoice(this.voice.vfNotes);
  }

  raiseKey(key: string) : string {
    let [noteName, octave] = key.split('/');
    let newNoteName = this.newNoteName(noteName.charCodeAt(0) + 1);
    let raiseOctave = this.shouldRaiseOctave(noteName, newNoteName);
    let newoctave = raiseOctave ? String(+octave + 1) : octave;
    return `${newNoteName}/${newoctave}`;
  }

  lowerKey(key: string) : string {
    let [noteName, octave] = key.split('/');
    let newNoteName = this.newNoteName(noteName.charCodeAt(0) - 1);
    let lowerOctave = this.shouldLowerOctave(noteName, newNoteName);
    let newoctave = lowerOctave ? String(+octave - 1) : octave;
    return `${newNoteName}/${newoctave}`
  }

  shouldRaiseOctave(noteName: string, newNoteName: string) : boolean {
    return (noteName == 'b' && newNoteName == 'c')
  }

  shouldLowerOctave(noteName: string, newNoteName: string) : boolean {
    return (noteName == 'c' && newNoteName == 'b')
  }

  newNoteName(charCode: number) : string {
    let newCharCode;
    if (charCode > 103) {
      newCharCode = 97;
    } else if (charCode < 97) {
      newCharCode = 103;
    } else {
      newCharCode = charCode;
    }

    return String.fromCharCode(newCharCode);
  }

  updateNote(key: string, duration: string) {
    let note = new Vex.Flow.StaveNote({ keys: [key], duration: duration })
    this.voice.vfNotes[this.selectedNoteIndex] = note;
    this.selectNote(note);
  }

  updateVoice(notes: Array<Vex.Flow.Note>) : Vex.Flow.Voice {
    let voice = new Vex.Flow.Voice({
      num_beats: 4,
      beat_value: 4,
      resolution: Vex.Flow.RESOLUTION
    });
    voice.addTickables(notes);
    this.voice.vfVoice = voice;
    this.renderer.drawVoice(this.stave, voice);
  }
}
