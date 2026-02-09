// ========================================
// Charts Configuration and Initialization
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Chart.js default configuration
    Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    Chart.defaults.font.size = 14;
    Chart.defaults.color = '#2c3e50';

    // Color scheme
    const colors = {
        cli: '#2ecc71',
        gui: '#e74c3c',
        cliRgba: 'rgba(46, 204, 113, 0.8)',
        guiRgba: 'rgba(231, 76, 60, 0.8)',
        primary: '#4a90e2',
        secondary: '#50c878',
        purple: '#9b59b6',
        yellow: '#f39c12',
        orange: '#e67e22'
    };

    // ========================================
    // Performance Comparison Chart
    // ========================================

    const performanceCtx = document.getElementById('performanceChart');
    if (performanceCtx) {
        new Chart(performanceCtx, {
            type: 'bar',
            data: {
                labels: [
                    'Стартиране на ОС',
                    'Копиране на файлове (1GB)',
                    'Инсталиране на софтуер',
                    'Търсене на файлове',
                    'Създаване на 1000 файла',
                    'Системна актуализация'
                ],
                datasets: [{
                    label: 'CLI (секунди)',
                    data: [15, 8, 45, 2, 5, 120],
                    backgroundColor: colors.cliRgba,
                    borderColor: colors.cli,
                    borderWidth: 2
                }, {
                    label: 'GUI (секунди)',
                    data: [35, 28, 180, 15, 25, 300],
                    backgroundColor: colors.guiRgba,
                    borderColor: colors.gui,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.parsed.y + ' сек.';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Време (секунди)'
                        }
                    }
                }
            }
        });
    }

    // ========================================
    // Resource Usage Chart (Doughnut)
    // ========================================

    const resourceCtx = document.getElementById('resourceChart');
    if (resourceCtx) {
        new Chart(resourceCtx, {
            type: 'doughnut',
            data: {
                labels: ['CLI RAM', 'CLI CPU', 'GUI RAM', 'GUI CPU'],
                datasets: [{
                    data: [512, 5, 4096, 25],
                    backgroundColor: [
                        colors.cliRgba,
                        'rgba(46, 204, 113, 0.6)',
                        colors.guiRgba,
                        'rgba(231, 76, 60, 0.6)'
                    ],
                    borderColor: [
                        colors.cli,
                        colors.cli,
                        colors.gui,
                        colors.gui
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed;
                                if (label.includes('RAM')) {
                                    return label + ': ' + value + ' MB';
                                } else {
                                    return label + ': ' + value + '%';
                                }
                            }
                        }
                    }
                }
            }
        });
    }

    // ========================================
    // CPU & Memory Usage Chart
    // ========================================

    const cpuMemoryCtx = document.getElementById('cpuMemoryChart');
    if (cpuMemoryCtx) {
        new Chart(cpuMemoryCtx, {
            type: 'bar',
            data: {
                labels: ['RAM (MB)', 'CPU (%)'],
                datasets: [{
                    label: 'CLI',
                    data: [512, 5],
                    backgroundColor: colors.cliRgba,
                    borderColor: colors.cli,
                    borderWidth: 2
                }, {
                    label: 'GUI',
                    data: [4096, 25],
                    backgroundColor: colors.guiRgba,
                    borderColor: colors.gui,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // ========================================
    // User Satisfaction Radar Chart
    // ========================================

    const satisfactionCtx = document.getElementById('satisfactionChart');
    if (satisfactionCtx) {
        new Chart(satisfactionCtx, {
            type: 'radar',
            data: {
                labels: [
                    'Лесно­та за използване',
                    'Производителност',
                    'Възможности за автоматизация',
                    'Стабилност',
                    'Визуализация',
                    'Гъвкавост'
                ],
                datasets: [{
                    label: 'CLI',
                    data: [4, 10, 10, 9, 3, 10],
                    backgroundColor: 'rgba(46, 204, 113, 0.2)',
                    borderColor: colors.cli,
                    borderWidth: 2,
                    pointBackgroundColor: colors.cli
                }, {
                    label: 'GUI',
                    data: [9, 6, 4, 7, 10, 6],
                    backgroundColor: 'rgba(231, 76, 60, 0.2)',
                    borderColor: colors.gui,
                    borderWidth: 2,
                    pointBackgroundColor: colors.gui
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 10,
                        ticks: {
                            stepSize: 2
                        }
                    }
                }
            }
        });
    }

    // ========================================
    // Cost Analysis Chart
    // ========================================

    const costCtx = document.getElementById('costChart');
    if (costCtx) {
        new Chart(costCtx, {
            type: 'bar',
            data: {
                labels: [
                    'Първоначални разходи',
                    'Хардуер',
                    'Софтуерни лицензи',
                    'Обучение',
                    'Поддръжка (годишно)',
                    'Общо (3 години)'
                ],
                datasets: [{
                    label: 'CLI (лв.)',
                    data: [5000, 3000, 0, 8000, 2000, 17000],
                    backgroundColor: colors.cliRgba,
                    borderColor: colors.cli,
                    borderWidth: 2
                }, {
                    label: 'GUI (лв.)',
                    data: [15000, 12000, 6000, 3000, 4000, 37000],
                    backgroundColor: colors.guiRgba,
                    borderColor: colors.gui,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.parsed.y.toLocaleString() + ' лв.';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Разходи (лева)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value.toLocaleString() + ' лв.';
                            }
                        }
                    }
                }
            }
        });
    }

    // ========================================
    // Desktop OS Market Share
    // ========================================

    const desktopOSCtx = document.getElementById('desktopOSChart');
    if (desktopOSCtx) {
        new Chart(desktopOSCtx, {
            type: 'pie',
            data: {
                labels: ['Windows (GUI)', 'macOS (GUI)', 'Linux Desktop (GUI)', 'Linux CLI', 'Други'],
                datasets: [{
                    data: [70, 18, 8, 2, 2],
                    backgroundColor: [
                        '#0078d4',
                        '#a2aaad',
                        '#f39c12',
                        colors.cli,
                        '#95a5a6'
                    ],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'Десктоп системи (2026)'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    // ========================================
    // Server OS Market Share
    // ========================================

    const serverOSCtx = document.getElementById('serverOSChart');
    if (serverOSCtx) {
        new Chart(serverOSCtx, {
            type: 'pie',
            data: {
                labels: ['Linux CLI', 'Windows Server (GUI)', 'Unix CLI', 'Други'],
                datasets: [{
                    data: [78, 15, 5, 2],
                    backgroundColor: [
                        colors.cli,
                        colors.gui,
                        colors.purple,
                        '#95a5a6'
                    ],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'Сървърни системи (2026)'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    // ========================================
    // Security Comparison Chart
    // ========================================

    const securityCtx = document.getElementById('securityChart');
    if (securityCtx) {
        new Chart(securityCtx, {
            type: 'line',
            data: {
                labels: ['Ян', 'Фев', 'Мар', 'Апр', 'Май', 'Юни', 'Юли', 'Авг', 'Сеп', 'Окт', 'Ное', 'Дек'],
                datasets: [{
                    label: 'CLI Уязвимости',
                    data: [2, 1, 3, 2, 1, 2, 1, 2, 1, 3, 2, 1],
                    borderColor: colors.cli,
                    backgroundColor: 'rgba(46, 204, 113, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'GUI Уязвимости',
                    data: [8, 6, 9, 7, 8, 6, 9, 7, 8, 9, 7, 8],
                    borderColor: colors.gui,
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Брой инциденти'
                        }
                    }
                }
            }
        });
    }

    // ========================================
    // Usage Scenarios Chart
    // ========================================

    const usageCtx = document.getElementById('usageChart');
    if (usageCtx) {
        new Chart(usageCtx, {
            type: 'bar',
            data: {
                labels: [
                    'DevOps',
                    'Системна администрация',
                    'Офис работа',
                    'Дизайн & Мултимедия',
                    'Разработка',
                    'Образование'
                ],
                datasets: [{
                    label: 'CLI %',
                    data: [95, 85, 5, 10, 70, 20],
                    backgroundColor: colors.cliRgba,
                    borderColor: colors.cli,
                    borderWidth: 2
                }, {
                    label: 'GUI %',
                    data: [5, 15, 95, 90, 30, 80],
                    backgroundColor: colors.guiRgba,
                    borderColor: colors.gui,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.parsed.x + '%';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Процент на използване'
                        }
                    }
                }
            }
        });
    }

    // ========================================
    // Learning Curve Chart
    // ========================================

    const learningCtx = document.getElementById('learningChart');
    if (learningCtx) {
        new Chart(learningCtx, {
            type: 'line',
            data: {
                labels: ['Седмица 1', 'Седмица 2', 'Седмица 3', 'Седмица 4', 'Седмица 6', 'Седмица 8', 'Седмица 12'],
                datasets: [{
                    label: 'CLI Компетентност',
                    data: [10, 20, 35, 50, 70, 85, 95],
                    borderColor: colors.cli,
                    backgroundColor: 'rgba(46, 204, 113, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'GUI Компетентност',
                    data: [40, 60, 75, 85, 90, 95, 98],
                    borderColor: colors.gui,
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Ниво на компетентност (%)'
                        }
                    }
                }
            }
        });
    }

    // ========================================
    // Automation Capabilities Chart
    // ========================================

    const automationCtx = document.getElementById('automationChart');
    if (automationCtx) {
        new Chart(automationCtx, {
            type: 'radar',
            data: {
                labels: [
                    'Пакетна обработка',
                    'Scripting',
                    'Scheduling',
                    'Deployment',
                    'Конфигурация',
                    'Мониторинг'
                ],
                datasets: [{
                    label: 'CLI',
                    data: [10, 10, 10, 10, 9, 10],
                    backgroundColor: 'rgba(46, 204, 113, 0.2)',
                    borderColor: colors.cli,
                    borderWidth: 2,
                    pointBackgroundColor: colors.cli
                }, {
                    label: 'GUI',
                    data: [4, 3, 6, 5, 7, 8],
                    backgroundColor: 'rgba(231, 76, 60, 0.2)',
                    borderColor: colors.gui,
                    borderWidth: 2,
                    pointBackgroundColor: colors.gui
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 10,
                        ticks: {
                            stepSize: 2
                        }
                    }
                }
            }
        });
    }

    // ========================================
    // Animation Effect for Charts
    // ========================================

    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    const allCharts = document.querySelectorAll('.chart-section');
    allCharts.forEach(chart => {
        chart.style.opacity = '0';
        chart.style.transform = 'translateY(30px)';
        chart.style.transition = 'all 0.6s ease';
        chartObserver.observe(chart);
    });

    console.log('Charts loaded successfully! 📊');
});
