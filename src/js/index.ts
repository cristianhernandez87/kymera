/**
 * Styles
 */
import "../scss/index.scss";
import $ = require("jquery");

/**
 * Modules
 */
import { silcCoreInit } from 'silc-core';
import { menuScroll } from '../components/nav/menu';
import { textAnimationHero } from '../components/hero/hero';


/**
 * Init
 */

silcCoreInit();
menuScroll();
textAnimationHero();