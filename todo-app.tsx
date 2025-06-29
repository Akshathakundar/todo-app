"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Plus } from "lucide-react"

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function TodoApp() {
  // State Management: Using useState to manage todos array
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React fundamentals", completed: true },
    { id: 2, text: "Build a todo app", completed: false },
    { id: 3, text: "Master state management", completed: false },
  ])
  const [inputValue, setInputValue] = useState("")
  const [error, setError] = useState("")

  // Event Handling: Add functionality with form validation
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()

    // Form Handling: Input validation
    if (!inputValue.trim()) {
      setError("Please enter a todo item")
      return
    }

    if (inputValue.trim().length < 3) {
      setError("Todo must be at least 3 characters long")
      return
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
    }

    setTodos((prevTodos) => [...prevTodos, newTodo])
    setInputValue("")
    setError("")
  }

  // Event Handling: Toggle completion functionality
  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  // Event Handling: Delete functionality
  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  // Clear input error when user starts typing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (error) setError("")
  }

  const completedCount = todos.filter((todo) => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800">Todo App</CardTitle>
            <p className="text-gray-600 mt-2">
              {completedCount} of {totalCount} tasks completed
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Form Handling: Input validation and submission */}
            <form onSubmit={handleAddTodo} className="space-y-3">
              <div className="flex gap-2">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Add a new todo..."
                    value={inputValue}
                    onChange={handleInputChange}
                    className={error ? "border-red-500 focus-visible:ring-red-500" : ""}
                  />
                  {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                </div>
                <Button type="submit" className="px-4">
                  <Plus className="w-4 h-4 mr-2" />
                  Add
                </Button>
              </div>
            </form>

            {/* Todo List */}
            <div className="space-y-2">
              {todos.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p className="text-lg">No todos yet!</p>
                  <p className="text-sm">Add your first todo above</p>
                </div>
              ) : (
                todos.map((todo) => (
                  <div
                    key={todo.id}
                    className={`flex items-center gap-3 p-4 rounded-lg border transition-all duration-200 ${
                      todo.completed ? "bg-gray-50 border-gray-200" : "bg-white border-gray-300 hover:shadow-md"
                    }`}
                  >
                    {/* Event Handling: Toggle functionality */}
                    <Checkbox
                      id={`todo-${todo.id}`}
                      checked={todo.completed}
                      onCheckedChange={() => handleToggleTodo(todo.id)}
                      className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                    />

                    {/* Conditional Rendering: Strike-through completed tasks */}
                    <label
                      htmlFor={`todo-${todo.id}`}
                      className={`flex-1 cursor-pointer transition-all duration-200 ${
                        todo.completed ? "line-through text-gray-500" : "text-gray-800 hover:text-gray-600"
                      }`}
                    >
                      {todo.text}
                    </label>

                    {/* Event Handling: Delete functionality */}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      aria-label={`Delete todo: ${todo.text}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))
              )}
            </div>

            {/* Progress Summary */}
            {todos.length > 0 && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex justify-between items-center text-sm text-blue-800">
                  <span>Progress</span>
                  <span>{Math.round((completedCount / totalCount) * 100)}%</span>
                </div>
                <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(completedCount / totalCount) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
