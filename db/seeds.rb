Task.destroy_all

Task.create!([{
  title: "First task",
  description: "This is the first task",
},
              {
  title: "Second task",
  description: "This is the second task",
},
              {
  title: "Third task",
  description: "This is the third task",
  avatar_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
}])

p "====== Created #{Task.count} tasks"
