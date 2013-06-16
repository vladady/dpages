<?php
$settings = array(
    1 => array(
      'id' => 1,
      'type' => 'row',
      'parent' => 0,
    ),
    2 => array(
      'id' => 2,
      'type' => 'span',
      'parent' => 1,
      'weight' => 1,
      'width' => 8,
    ),
    3 => array(
      'id' => 3,
      'type' => 'span',
      'parent' => 1,
      'weight' => 2,
      'width' => 4,
    ),
    4 => array(
      'id' => 4,
      'type' => 'block',
      'module' => 'system',
      'delta' => 'main-menu',
      'parent' => 2,
      'weight' => 1,
      'width' => 12,
    ),
    5 => array(
      'id' => 5,
      'type' => 'block',
      'module' => 'system',
      'delta' => 'main-menu',
      'parent' => 2,
      'weight' => 2,
      'width' => 12,
    ),
    6 => array(
      'id' => 6,
      'type' => 'block',
      'module' => 'node',
      'delta' => 'recent',
      'parent' => 3,
      'weight' => 1,
      'width' => 12,
    ),
  );
