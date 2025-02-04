
const employees = [
    {
      "id": "1",
      "firstName": "Nasreen",
      "email": "e1@e.com",
      "password": "123",
      "taskCounts": {
        "active": 2,
        "newTask": 2,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskNumber": 2,
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Task 1 - Update Reports",
          "description": "Update the monthly sales reports and send them to the management team.",
          "date": "2025-01-28",
          "category": "Reporting"
        },
        {
          "taskNumber": 1,
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Task 2 - Attend Meeting",
          "description": "Attend the weekly team meeting and discuss the project progress.",
          "date": "2025-01-25",
          "category": "Meeting"
        },
        {
          "taskNumber": 2,
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Task 3 - Fix Bugs",
          "description": "Resolve the bugs reported in the recent software update.",
          "date": "2025-01-30",
          "category": "Development"
        }
      ]
    },
    {
      "id": "2",
      "firstName": "Ayaz",
      "email": "e2@e.com",
      "password": "123",
      "taskCounts": {
        "active": 2,
        "newTask": 2,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "taskNumber": 1,
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Task 1 - Design UI",
          "description": "Design the user interface for the new mobile application.",
          "date": "2025-01-29",
          "category": "Design"
        },
        {
          "taskNumber": 2,
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Task 2 - Test Features",
          "description": "Test new features implemented in the app and ensure functionality.",
          "date": "2025-01-26",
          "category": "Testing"
        },
        {
          "taskNumber": 3,
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": true,
          "title": "Task 3 - Research",
          "description": "Research latest trends in UI/UX for mobile apps.",
          "date": "2025-01-27",
          "category": "Research"
        }
      ]
    },
    {
      "id": "3",
      "firstName": "Altaf",
      "email": "e3@e.com",
      "password": "123",
      "taskCounts": {
        "active": 2,
        "newTask": 2,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskNumber": 1,
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Task 1 - Write Documentation",
          "description": "Write documentation for the new software release.",
          "date": "2025-01-28",
          "category": "Documentation"
        },
        {
          "taskNumber": 2,
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Task 2 - Review Code",
          "description": "Review the code written by the development team for quality assurance.",
          "date": "2025-01-24",
          "category": "Code Review"
        }
      ]
    },
    {
      "id": "4",
      "firstName": "Yasmin",
      "email": "e4@e.com",
      "password": "123",
      "taskCounts": {
        "active": 2,
        "newTask": 2,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "taskNumber": 1,
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Task 1 - Client Call",
          "description": "Have a call with the client to discuss the project requirements.",
          "date": "2025-01-29",
          "category": "Client Interaction"
        },
        {
          "taskNumber": 3,
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": true,
          "title": "Task 2 - Finalize Contract",
          "description": "Finalize the contract terms with the client and send the final agreement.",
          "date": "2025-01-27",
          "category": "Contract"
        },
        {
          "taskNumber": 2,
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Task 3 - Prepare Presentation",
          "description": "Prepare the presentation slides for the upcoming board meeting.",
          "date": "2025-01-23",
          "category": "Presentation"
        }
      ]
    },
    {
      "id": "5",
      "firstName": "Anshu",
      "email": "e5@e.com",
      "password": "123",
      "taskCounts": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "taskNumber": 1,
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Task 1 - Marketing Campaign",
          "description": "Create a marketing campaign plan for the new product launch.",
          "date": "2025-01-28",
          "category": "Marketing"
        },
        {
          "taskNumber": 2,
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Task 2 - Social Media Strategy",
          "description": "Develop a social media strategy for the product promotion.",
          "date": "2025-01-26",
          "category": "Marketing"
        },
        {
          "taskNumber": 3,
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Task 3 - Website Content",
          "description": "Update the website content with the latest product information.",
          "date": "2025-01-25",
          "category": "Content"
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": "admin1",
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
  

  export const setLocalStorage=()=>{
    localStorage.setItem('Employees',JSON.stringify(employees))
    localStorage.setItem('Admin',JSON.stringify(admin))
}

  export const getLocalStorage=()=>{
    const employees= JSON.parse(localStorage.getItem('Employees'))
    const admin= JSON.parse(localStorage.getItem('Admin'))
    return {employees,admin}
  }