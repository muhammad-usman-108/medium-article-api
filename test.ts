// const MediumArticles = require('./index.js');
import { MediumArticles } from './index';

const mediumArticles = MediumArticles();
const username = 'engrmuhammadusman108';

console.log('.....Welcome to Medium NPM Package......')


mediumArticles.getProfileUrl(username).then( (result) => console.log('The profile url is ', result))

mediumArticles.getProfileTitle(username).then( (result) => console.log('The profile title is ', result))

mediumArticles.getProfileAuthor(username).then( (result) => console.log('The profile author is ', result))

mediumArticles.getProfileDescription(username).then( (result) => console.log('The profile description is ', result))

mediumArticles.getProfileImageUrl(username).then( (result) => console.log('The profile image is ', result))

mediumArticles.getLatestArticleTitle(username).then( (result) => console.log('The latest article title is ', result))

mediumArticles.getLatestArticlePublicationDate(username).then( (result) => console.log('The latest article publication date is ', result))

mediumArticles.getLatestArticleUrl(username).then( (result) => console.log('The latest article url is ', result))

mediumArticles.getLatestArticleDescription(username).then( (result) => console.log('The latest article description is ', result))

mediumArticles.getLatestArticle(username).then( (result) => console.log('The latest article is ', result))

mediumArticles.getLatestArticlesTitle(username).then( (result) => console.log('The latest articles titles are ', result))