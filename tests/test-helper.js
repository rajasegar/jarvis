import Application from "jarvis/app";
import config from "jarvis/config/environment";
import QUnit from "qunit";
import { setApplication } from "@ember/test-helpers";
import { setup } from "qunit-dom";
import { start } from "ember-qunit";
import {
  forceModulesToBeLoaded,
  sendCoverage,
} from "ember-cli-code-coverage/test-support";

setApplication(Application.create(config.APP));

QUnit.done(async function () {
  forceModulesToBeLoaded();
  await sendCoverage();
});

setup(QUnit.assert);

start();
