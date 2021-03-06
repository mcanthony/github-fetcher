'use strict';
import assert from 'assert';
import githubFetcher from './';

it('should return the user info', () => {
  githubFetcher.user('hemanth').then((data) =>
    assert.equal(data.login, 'hemanth'));
});

it('should return the orgs of the user', () => {
  githubFetcher.orgs('hemanth').then((data) =>
    assert.equal(data.login, 'hemanth'));
});

it('should return the gists of the user', () => {
  githubFetcher.gists('hemanth').then((data) =>
    assert.equal(data[0].public, true));
});

it('should return all the stargazers.', () => {
  githubFetcher.stargazers('hemanth', 'es7-features').then((data) =>
    assert.equal(data.length > 0, true));
});

it('should return all the repos for the given user.', () => {
  githubFetcher.repos('hemanth').then((data) =>
    assert.equal(data.length > 0, true));
});

it('should return all the branches of a repo for the given user.', () => {
  githubFetcher.repos('hemanth', 'es7-features').then((data) =>
    assert.equal(data.length > 0, true));
});

it('should return all the emojis available to use on GitHub.', () => {
  githubFetcher.emojis().then(data =>
    assert.equal(data.length > 0, true));
});

it('should return all the gitignore templates.', () => {
  githubFetcher.gitIgnore().then(data =>
    assert.equal(data.length > 0, true));
});

it('should return node\'s gitignore template.', () => {
  githubFetcher.gitIgnore('node').then(data =>
    assert.equal(data.length > 0, true));
});

it('should return all the members of the given org.', () => {
  githubFetcher.members('yeoman').then(data =>
    assert.equal(data.length > 0, true));
});

it('should return all the licenses.', () => {
  githubFetcher.licenses().then(data =>
    assert.equal(data.length > 0, true));

  githubFetcher.licenses('mit').then(data =>
    assert.equal(data.length > 0, true));
});
