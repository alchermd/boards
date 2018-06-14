<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class TaskTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function index_returns_all_tasks()
    {
        $tasks = factory(\App\Task::class, 10)->create();

        $response = $this->get('/api/tasks');

        $response->assertJsonCount(count($tasks));
    }
}
