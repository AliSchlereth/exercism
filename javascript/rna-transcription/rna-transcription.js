var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
  var dnaToRna = {
    G: `C`,
    C: `G`,
    T: `A`,
    A: `U`
  }
  var rna = "";
  for(i=0; i < dna.length; i++) {
    rna += dnaToRna[dna[i]];
  }
  return rna;
}

module.exports = DnaTranscriber;
