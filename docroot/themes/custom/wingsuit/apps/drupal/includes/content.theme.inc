<?php

/**
 * @file
 * Functions to support theming content layout in the Techcast theme.
 */

use Drupal\Core\Site\Settings;
/**
 * Implements hook_preprocess_HOOK().
 */
function wingsuit_preprocess_node(&$variables) {
  $host = Settings::get('nuxt_preview_url', 'http://localhost:3000');
  $current_path = \Drupal::service('path.current')->getPath();
  $variables['nuxt_preview_url'] = $host . $current_path;
}
