const { useState, useEffect } = React;

const TodoApp = () => {
    // State management
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('all'); // all, active, completed

    // Load tasks từ localStorage khi khởi động
    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    // Lưu tasks vào localStorage mỗi khi thay đổi
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Thêm task mới
    const addTask = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            const newTask = {
                id: Date.now(),
                text: inputValue,
                completed: false,
                createdAt: new Date().toLocaleString('vi-VN')
            };
            setTasks([newTask, ...tasks]);
            setInputValue('');
        }
    };

    // Toggle trạng thái completed
    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    // Xóa task
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    // Lọc tasks theo filter
    const getFilteredTasks = () => {
        switch (filter) {
            case 'active':
                return tasks.filter(task => !task.completed);
            case 'completed':
                return tasks.filter(task => task.completed);
            default:
                return tasks;
        }
    };

    // Thống kê
    const stats = {
        total: tasks.length,
        active: tasks.filter(t => !t.completed).length,
        completed: tasks.filter(t => t.completed).length
    };

    const filteredTasks = getFilteredTasks();

    return (
        <div className="container">
            <header className="header">
                <h1 className="title">TaskFlow</h1>
                <p className="subtitle">Quản lý công việc hiệu quả</p>
            </header>

            {/* Thống kê */}
            <div className="stats-bar">
                <div className="stat-card">
                    <div className="stat-label">Tổng số</div>
                    <div className="stat-value">{stats.total}</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Đang làm</div>
                    <div className="stat-value">{stats.active}</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Hoàn thành</div>
                    <div className="stat-value">{stats.completed}</div>
                </div>
            </div>

            {/* Form thêm task */}
            <div className="input-section">
                <form onSubmit={addTask} className="input-wrapper">
                    <input
                        type="text"
                        className="task-input"
                        placeholder="Thêm công việc mới..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit" className="add-button">
                        Thêm
                    </button>
                </form>
            </div>

            {/* Bộ lọc */}
            <div className="filters">
                <button
                    className={`filter-button ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    📋 Tất cả
                </button>
                <button
                    className={`filter-button ${filter === 'active' ? 'active' : ''}`}
                    onClick={() => setFilter('active')}
                >
                    ⏳ Đang làm
                </button>
                <button
                    className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
                    onClick={() => setFilter('completed')}
                >
                    ✅ Hoàn thành
                </button>
            </div>

            {/* Danh sách tasks */}
            <div className="tasks-list">
                {filteredTasks.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-icon">
                            {filter === 'completed' ? '🎉' : '📝'}
                        </div>
                        <div className="empty-text">
                            {filter === 'completed'
                                ? 'Chưa có công việc nào hoàn thành'
                                : filter === 'active'
                                ? 'Không có công việc đang làm'
                                : 'Chưa có công việc nào. Hãy thêm công việc mới!'}
                        </div>
                    </div>
                ) : (
                    filteredTasks.map(task => (
                        <div
                            key={task.id}
                            className={`task-item ${task.completed ? 'completed' : ''}`}
                        >
                            <div
                                className={`checkbox ${task.completed ? 'checked' : ''}`}
                                onClick={() => toggleTask(task.id)}
                            />
                            <div className="task-text">{task.text}</div>
                            <div className="task-time">{task.createdAt}</div>
                            <button
                                className="delete-button"
                                onClick={() => deleteTask(task.id)}
                            >
                                Xóa
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

// Render app
ReactDOM.render(<TodoApp />, document.getElementById('root'));
