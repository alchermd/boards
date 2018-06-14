<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use App\Task;

class TaskTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function index_returns_all_tasks()
    {
        $tasks = factory(Task::class, 10)->create();

        $response = $this->get('/api/tasks');

        $response->assertJsonCount(count($tasks));
    }

    /** @test */
    public function can_create_new_tasks()
    {
        $response = $this->json('POST', '/api/tasks', [
            'body' => 'Sample task.',
            'status' => 0,
        ]);

        $response
            ->assertStatus(201)
            ->assertJson([
                'created' => true,
            ]);

        $this->assertDatabaseHas('tasks', [
            'body' => 'Sample task.',
            'status' => 0,
        ]);
    }
}
