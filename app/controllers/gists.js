import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  customize: service(),
  codemod: service(),
  version: computed('gist_id', function() {
    this.codemod.readGist(this.get('gist_id'));
    return '1.0';
  })
  
});
