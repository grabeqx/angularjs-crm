import angular from 'angular';
import mocks from 'angular-mocks';
import app from './app.module';

let context = require.context('.', true, /\.spec\.js/);

context.keys().forEach(context);