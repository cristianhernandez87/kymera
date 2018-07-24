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


/**
 * Init
 */
silcCoreInit();
menuScroll();