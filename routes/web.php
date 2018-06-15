<?php

Route::view('/', 'boards');

Route::apiResource('/api/tasks', 'TaskController');
