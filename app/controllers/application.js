import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from "@ember/object";
import ENV from "jarvis/config/environment";

export default Controller.extend({
  codemod: service(),
  router: service(),
  
  emberVersion: computed(function() {
    return ENV.pkg.devDependencies["ember-source"];
  }),
  nodeBuilderVersion: computed(function() {
    return ENV.pkg.dependencies["ast-node-builder"];
  }),
  nodeFinderVersion: computed(function() {
    return ENV.pkg.dependencies["ast-node-finder"];
  }),
  buttonText: computed(function() { 
    return 'Save';
  }),

  buttonDisabled: computed(function() {
    return false;
  }),
  
  actions: {

    saveGist() {
      this.set('buttonText', 'Saving...');
      this.set('buttonDisabled', true);
      this.codemod.saveGist()
	.then(data => {
          this.set('buttonText', 'Save');
          this.set('buttonDisabled', false);
          this.router.transitionTo('gists', data.id);
	});
    }
  }
});
