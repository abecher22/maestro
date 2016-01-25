/* */ 
"format cjs";
/**
 * VexFlow - StaveTie Tests
 * Copyright Mohit Muthanna 2010 <mohit@muthanna.com>
 */

VF.Test.StaveTie = (function() {
  var StaveTie = {
    Start: function() {
      var runTests = VF.Test.runTests;

      QUnit.module("StaveTie");
      runTests("Simple StaveTie", StaveTie.simple);
      runTests("Chord StaveTie", StaveTie.chord);
      runTests("Stem Up StaveTie", StaveTie.stemUp);
      runTests("No End Note", StaveTie.noEndNote);
      runTests("No Start Note", StaveTie.noStartNote);
    },

    tieNotes: function(notes, indices, stave, ctx) {
      var voice = new VF.Voice(VF.Test.TIME4_4);
      voice.addTickables(notes);

      var formatter = new VF.Formatter().joinVoices([voice]).
        format([voice], 250);
      voice.draw(ctx, stave);

      var tie = new VF.StaveTie({
        first_note: notes[0],
        last_note: notes[1],
        first_indices: indices,
        last_indices: indices,
      });

      tie.setContext(ctx);
      tie.draw();
    },

    drawTie: function(notes, indices, options) {
      var ctx = new options.contextBuilder(options.canvas_sel, 350, 140);

      ctx.scale(0.9, 0.9); ctx.fillStyle = "#221"; ctx.strokeStyle = "#221";
      var stave = new VF.Stave(10, 10, 350).setContext(ctx).draw();

      VF.Test.StaveTie.tieNotes(notes, indices, stave, ctx);
    },

    simple: function(options, contextBuilder) {
      options.contextBuilder = contextBuilder;
      function newNote(note_struct) { return new VF.StaveNote(note_struct); }
      function newAcc(type) { return new VF.Accidental(type); }

      VF.Test.StaveTie.drawTie([
        newNote({ keys: ["c/4", "e/4", "a/4"], stem_direction: -1, duration: "h"}).
          addAccidental(0, newAcc("b")).
          addAccidental(1, newAcc("#")),
        newNote({ keys: ["d/4", "e/4", "f/4"], stem_direction: -1, duration: "h"})
      ], [0, 1], options);
      ok(true, "Simple Test");
    },

    chord: function(options, contextBuilder) {
      options.contextBuilder = contextBuilder;
      function newNote(note_struct) { return new VF.StaveNote(note_struct); }
      function newAcc(type) { return new VF.Accidental(type); }

      VF.Test.StaveTie.drawTie([
        newNote({ keys: ["d/4", "e/4", "f/4"], stem_direction: -1, duration: "h"}),
        newNote({ keys: ["c/4", "f/4", "a/4"], stem_direction: -1, duration: "h"}).
          addAccidental(0, newAcc("n")).
          addAccidental(1, newAcc("#")),
      ], [0, 1, 2], options);
      ok(true, "Chord test");
    },

    stemUp: function(options, contextBuilder) {
      options.contextBuilder = contextBuilder;
      function newNote(note_struct) { return new VF.StaveNote(note_struct); }
      function newAcc(type) { return new VF.Accidental(type); }

      VF.Test.StaveTie.drawTie([
        newNote({ keys: ["d/4", "e/4", "f/4"], stem_direction: 1, duration: "h"}),
        newNote({ keys: ["c/4", "f/4", "a/4"], stem_direction: 1, duration: "h"}).
          addAccidental(0, newAcc("n")).
          addAccidental(1, newAcc("#")),
      ], [0, 1, 2], options);
      ok(true, "Stem up test");
    },

    noEndNote: function(options, contextBuilder) {
      var ctx = contextBuilder(options.canvas_sel, 350, 140);
      ctx.scale(0.9, 0.9); ctx.fillStyle = "#221"; ctx.strokeStyle = "#221";
      ctx.font = "10pt Arial";
      var stave = new VF.Stave(10, 10, 350).setContext(ctx).draw();

      function newNote(note_struct) { return new VF.StaveNote(note_struct); }
      function newAcc(type) { return new VF.Accidental(type); }

      var notes = [
        newNote({ keys: ["c/4", "e/4", "a/4"], stem_direction: -1, duration: "h"}).
          addAccidental(0, newAcc("b")).
          addAccidental(1, newAcc("#")),
        newNote({ keys: ["d/4", "e/4", "f/4"], stem_direction: -1, duration: "h"})
      ];

      var voice = new VF.Voice(VF.Test.TIME4_4);
      voice.addTickables(notes);

      var formatter = new VF.Formatter().joinVoices([voice]).
        format([voice], 250);
      voice.draw(ctx, stave);

      var tie = new VF.StaveTie({
        first_note: notes[1],
        last_note: null,
        first_indices: [2],
        last_indices: [2]
      }, "slow.").setContext(ctx).draw();

      ok(true, "No end note");
    },

    noStartNote: function(options, contextBuilder) {
      var ctx = contextBuilder(options.canvas_sel, 350, 140);
      ctx.scale(0.9, 0.9); ctx.fillStyle = "#221"; ctx.strokeStyle = "#221";
      ctx.font = "10pt Arial";
      var stave = new VF.Stave(10, 10, 350).addTrebleGlyph().
        setContext(ctx).draw();

      function newNote(note_struct) { return new VF.StaveNote(note_struct); }
      function newAcc(type) { return new VF.Accidental(type); }

      var notes = [
        newNote({ keys: ["c/4", "e/4", "a/4"], stem_direction: -1, duration: "h"}).
          addAccidental(0, newAcc("b")).
          addAccidental(1, newAcc("#")),
        newNote({ keys: ["d/4", "e/4", "f/4"], stem_direction: -1, duration: "h"})
      ];

      var voice = new VF.Voice(VF.Test.TIME4_4);
      voice.addTickables(notes);

      var formatter = new VF.Formatter().joinVoices([voice]).
        format([voice], 250);
      voice.draw(ctx, stave);

      var tie = new VF.StaveTie({
        first_note: null,
        last_note: notes[0],
        first_indices: [2],
        last_indices: [2],
      }, "H").setContext(ctx).draw();

      ok(true, "No end note");
    }
  };

  return StaveTie;
})();