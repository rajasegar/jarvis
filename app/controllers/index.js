import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  customize: service(),
  codemod: service(),
  theme: computed.reads('customize.theme'),
  mode: computed.reads('codemod.mode'),
  sampleCode: computed.reads('codemod.sourceCode'),
  destCode: computed.reads('codemod.destCode'),
  opCode: computed.reads('codemod.opCode'),
  parser: computed.reads('codemod.parser')
});
