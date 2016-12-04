import _ from 'lodash';

module.exports = [
    {
        path: '/user/login',
        time: 1000,
        response: function (data) {
            let response;

            if (data.password === 'valid' || (data.rememberToken === 'aa41efe0a1b3eeb9bf303e4561ff8392' && data.userId == 12)) {
                response = {
                    status: 'success',
                    data: {
                        'staff': data.staff,
                        'userId': 12,
                        'token': 'cc6b4921e6733d6aafe284ec0d7be57e',
                        'rememberToken': (data.remember) ? 'aa41efe0a1b3eeb9bf303e4561ff8392' : null,
                        'rememberExpiration': (data.remember) ? 20180806 : 0
                    }
                };
            } else {
                response = {
                    status: 'fail',
                    message: 'Invalid Credientals'
                };
            }

            return response;
        }
    },
    {
        path: '/user/logout',
        time: 100,
        response: function () {
            return {
                status: 'success',
                data: {}
            };
        }
    },
    {
        path: '/user/check-session',
        time: 100,
        response: function () {
            return {
                status: 'success',
                data: {
                    sessionActive: true
                }
            };
        }
    },
    {
        path: '/user/send-recover-password',
        time: 2000,
        response: function (data) {

            if (data.email.length > 10) {
                return {
                    status: 'success',
                    data: {}
                };
            } else {
                return {
                    status: 'fail',
                    message: 'Email not exists',
                    data: {}
                };
            }
        }
    },
    {
        path: '/user/recover-password',
        time: 1000,
        response: function (data) {

            if (data.password.length > 6) {
                return {
                    status: 'success',
                    data: {}
                };
            } else {
                return {
                    status: 'fail',
                    message: 'Invalid token',
                    data: {}
                };
            }
        }
    },
    {
        path: '/user/signup',
        time: 1000,
        response: function (data) {
            if (data.email.length > 15) {
                return {
                    status: 'success',
                    data: {}
                };
            } else {
                return {
                    status: 'fail',
                    message: 'Email already exists',
                    data: {}
                };
            }
        }
    },
    {
        path: '/user/edit-email',
        time: 1000,
        response: function () {
            return {
                status: 'success',
                data: {}
            };
        }
    },
    {
        path: '/user/edit-password',
        time: 1000,
        response: function () {
            return {
                status: 'success',
                data: {}
            };
        }
    },
    {
        path: '/user/delete',
        time: 1000,
        response: function () {
            return {
                status: 'success',
                data: {}
            };
        }
    },
    {
        path: '/user/get-user',
        time: 100,
        response: function () {
            return {
                status: 'success',
                data: {
                    name: 'Kurt Gödel',
                    email: 'kurt@currycurrylady.hs',
                    tickets: _.times(13).map(() => {
                        return {
                            ticketNumber: '118551',
                            title: 'Lorem ipsum door',
                            content: 'I had a problem with the installation of the php server',
                            department: {
                                id: 1,
                                name: 'Sales Support'
                            },
                            date: '20150409',
                            file: 'http://www.opensupports.com/some_file.zip',
                            language: 'en',
                            unread: false,
                            closed: false,
                            priority: 'low',
                            author: {
                                name: 'Haskell Curry',
                                email: 'haskell@lambda.com'
                            },
                            owner: {
                                name: 'Steve Jobs'
                            },
                            events: [
                                {
                                    type: 'ASSIGN',
                                    date: '20150409',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'COMMENT',
                                    date: '20150409',
                                    content: 'Do you have apache installed? It generally happens if you dont have apache.',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'UN_ASSIGN',
                                    date: '20150410',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'DEPARTMENT_CHANGED',
                                    date: '20150411',
                                    content: 'System support',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'COMMENT',
                                    date: '20150412',
                                    content: 'I have already installed apache, but the problem persists',
                                    author: {
                                        name: 'Haskell Curry',
                                        steve: 'haskell@lambda.com',
                                        staff: false
                                    }
                                },
                                {
                                    type: 'PRIORITY_CHANGED',
                                    date: '20150413',
                                    content: 'MEDIUM',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'COMMENT',
                                    date: '20150511',
                                    content: 'Thanks!, I soved it by myself',
                                    author: {
                                        name: 'Haskell Curry',
                                        steve: 'haskell@lambda.com',
                                        staff: false
                                    }
                                },
                                {
                                    type: 'CLOSE',
                                    date: '20150513',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'RE_OPEN',
                                    date: '20151018',
                                    author: {
                                        name: 'Haskell Curry',
                                        email: 'haskell@lambda.com',
                                        staff: false
                                    }
                                }
                            ]
                        };
                    })
                }
            }
        }
    },
    {
        path: '/user/get-users',
        time: 100,
        response: function (data) {
            return {
                status: 'success',
                data: {
                    page: data.page,
                    pages: 10,
                    orderBy: 'date',
                    desc: true,
                    search: '',
                    users: [
                        {
                            id: 101,
                            name: 'Haskell Curry',
                            email: 'haskell@currycurrylady.com',
                            tickets: 5,
                            signupDate: 20160415
                        },
                        {
                            id: 97,
                            name: 'Alan Turing',
                            email: 'turing@currycurrylady.com',
                            tickets: 1,
                            signupDate: 20160401
                        },
                        {
                            id: 89,
                            name: 'David Hilbert',
                            email: 'hilbert@currycurrylady.com',
                            tickets: 2,
                            signupDate: 20160208
                        },
                        {
                            id: 83,
                            name: 'Kurt Gödel',
                            email: 'kurt@currycurrylady.com',
                            tickets: 10,
                            signupDate: 20160110
                        },
                        {
                            id: 79,
                            name: 'Mojzesz Presburger',
                            email: 'presburger@currycurrylady.com',
                            tickets: 6,
                            signupDate: 20150415
                        },
                        {
                            id: 73,
                            name: 'Haskell Curry',
                            email: 'haskell@currycurrylady.com',
                            tickets: 5,
                            signupDate: 20160415
                        },
                        {
                            id: 71,
                            name: 'Alan Turing',
                            email: 'turing@currycurrylady.com',
                            tickets: 1,
                            signupDate: 20160401
                        },
                        {
                            id: 67,
                            name: 'David Hilbert',
                            email: 'hilbert@currycurrylady.com',
                            tickets: 2,
                            signupDate: 20160208
                        },
                        {
                            id: 61,
                            name: 'Kurt Gödel',
                            email: 'kurt@currycurrylady.com',
                            tickets: 10,
                            signupDate: 20160110
                        },
                        {
                            id: 59,
                            name: 'Mojzesz Presburger',
                            email: 'presburger@currycurrylady.com',
                            tickets: 6,
                            signupDate: 20150415
                        }
                    ]
                }
            };
        }
    },
    {
        path: '/user/get',
        time: 100,
        response: function () {
            return {
                status: 'success',
                data: {
                    name: 'Haskell Curry',
                    email: 'haskell@lambda.com',
                    tickets: [
                        {
                            ticketNumber: '445441',
                            title: 'Problem with installation',
                            content: 'I had a problem with the installation of the php server',
                            department: {
                                id: 2,
                                name: 'Technical Issues'
                            },
                            date: '20160416',
                            file: 'http://www.opensupports.com/some_file.zip',
                            language: 'en',
                            unread: true,
                            closed: false,
                            priority: 'low',
                            author: {
                                id: 12,
                                name: 'Haskell Curry',
                                email: 'haskell@lambda.com'
                            },
                            owner: {
                                id: 15,
                                name: 'Steve Jobs',
                                email: 'steve@jobs.com'
                            },
                            events: [
                                {
                                    type: 'ASSIGN',
                                    date: '20150409',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'COMMENT',
                                    date: '20150409',
                                    content: 'Do you have apache installed? It generally happens if you dont have apache.',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'UN_ASSIGN',
                                    date: '20150410',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'DEPARTMENT_CHANGED',
                                    date: '20150411',
                                    content: 'System support',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'COMMENT',
                                    date: '20150412',
                                    content: 'I have already installed apache, but the problem persists',
                                    author: {
                                        name: 'Haskell Curry',
                                        steve: 'haskell@lambda.com',
                                        staff: false
                                    }
                                },
                                {
                                    type: 'PRIORITY_CHANGED',
                                    date: '20150413',
                                    content: 'MEDIUM',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'COMMENT',
                                    date: '20150511',
                                    content: 'Thanks!, I solved it by myself',
                                    author: {
                                        name: 'Haskell Curry',
                                        steve: 'haskell@lambda.com',
                                        staff: false
                                    }
                                },
                                {
                                    type: 'CLOSE',
                                    date: '20150513',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'RE_OPEN',
                                    date: '20151018',
                                    author: {
                                        name: 'Haskell Curry',
                                        email: 'haskell@lambda.com',
                                        staff: false
                                    }
                                }
                            ]
                        },
                        {
                            ticketNumber: '878552',
                            title: 'Lorem ipsum door',
                            content: 'I had a problem with the installation of the php server',
                            department: {
                                id: 1,
                                name: 'Sales Support'
                            },
                            date: '20160415',
                            file: 'http://www.opensupports.com/some_file.zip',
                            language: 'en',
                            unread: false,
                            closed: false,
                            priority: 'medium',
                            author: {
                                name: 'Haskell Curry',
                                email: 'haskell@lambda.com'
                            },
                            owner: {
                                name: 'Steve Jobs'
                            },
                            events: [
                                {
                                    type: 'ASSIGN',
                                    date: '20150409',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'COMMENT',
                                    date: '20150409',
                                    content: 'Do you have apache installed? It generally happens if you dont have apache.',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'UN_ASSIGN',
                                    date: '20150410',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'DEPARTMENT_CHANGED',
                                    date: '20150411',
                                    content: 'System support',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'COMMENT',
                                    date: '20150412',
                                    content: 'I have already installed apache, but the problem persists',
                                    author: {
                                        name: 'Haskell Curry',
                                        steve: 'haskell@lambda.com',
                                        staff: false
                                    }
                                },
                                {
                                    type: 'PRIORITY_CHANGED',
                                    date: '20150413',
                                    content: 'MEDIUM',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'COMMENT',
                                    date: '20150511',
                                    content: 'Thanks!, I soved it by myself',
                                    author: {
                                        name: 'Haskell Curry',
                                        steve: 'haskell@lambda.com',
                                        staff: false
                                    }
                                },
                                {
                                    type: 'CLOSE',
                                    date: '20150513',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'RE_OPEN',
                                    date: '20151018',
                                    author: {
                                        name: 'Haskell Curry',
                                        email: 'haskell@lambda.com',
                                        staff: false
                                    }
                                }
                            ]
                        },
                        {
                            ticketNumber: '118551',
                            title: 'Lorem ipsum door',
                            content: 'I had a problem with the installation of the php server',
                            department: {
                                id: 1,
                                name: 'Sales Support'
                            },
                            date: '20150409',
                            file: 'http://www.opensupports.com/some_file.zip',
                            language: 'en',
                            unread: false,
                            closed: false,
                            priority: 'high',
                            author: {
                                name: 'Haskell Curry',
                                email: 'haskell@lambda.com'
                            },
                            owner: {
                                name: 'Steve Jobs'
                            },
                            events: [
                                {
                                    type: 'ASSIGN',
                                    date: '20150409',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'COMMENT',
                                    date: '20150409',
                                    content: 'Do you have apache installed? It generally happens if you dont have apache.',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'UN_ASSIGN',
                                    date: '20150410',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'DEPARTMENT_CHANGED',
                                    date: '20150411',
                                    content: 'System support',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'COMMENT',
                                    date: '20150412',
                                    content: 'I have already installed apache, but the problem persists',
                                    author: {
                                        name: 'Haskell Curry',
                                        steve: 'haskell@lambda.com',
                                        staff: false
                                    }
                                },
                                {
                                    type: 'PRIORITY_CHANGED',
                                    date: '20150413',
                                    content: 'MEDIUM',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'COMMENT',
                                    date: '20150511',
                                    content: 'Thanks!, I soved it by myself',
                                    author: {
                                        name: 'Haskell Curry',
                                        steve: 'haskell@lambda.com',
                                        staff: false
                                    }
                                },
                                {
                                    type: 'CLOSE',
                                    date: '20150513',
                                    author: {
                                        name: 'Emilia Clarke',
                                        email: 'jobs@steve.com',
                                        profilePic: 'http://www.opensupports.com/profilepic.jpg',
                                        staff: true
                                    }
                                },
                                {
                                    type: 'RE_OPEN',
                                    date: '20151018',
                                    author: {
                                        name: 'Haskell Curry',
                                        email: 'haskell@lambda.com',
                                        staff: false
                                    }
                                }
                            ]
                        }
                    ]
                }
            };
        }
    },
    {
        path: '/user/un-ban',
        time: 100,
        response: function () {
            return {
                status: 'success',
                data: {}
            };
        }
    },
    {
        path: '/user/ban',
        time: 100,
        response: function () {
            return {
                status: 'success',
                data: {}
            };
        }
    },
    {
        path: '/user/list-ban',
        time: 100,
        response: function () {
            return {
                status: 'success',
                data: [
                    'unairable@randomword.com',
                    'hotchpot@randomword.com',
                    'elucidator@randomword.com',
                    'sug@randomword.com',
                    'nonculpability@randomword.com',
                    'steeplechaser@randomword.com',
                    'undefinite@randomword.com',
                    'anthobian@randomword.com',
                    'nontourist@randomword.com',
                    'berberis@randomword.com',
                    'sextus@randomword.com',
                    'empiristic@randomword.com',
                    'epistolized@randomword.com',
                    'duntroon@randomword.com',
                    'unpalled@randomword.com',
                    'baddish@randomword.com',
                    'subcritical@randomword.com',
                    'bolger@randomword.com',
                    'deactivate@randomword.com',
                    'visually@randomword.com',
                    'cameral@randomword.com',
                    'unpieced@randomword.com',
                    'gaging@randomword.com',
                    'advancement@randomword.com',
                    'plenteous@randomword.com',
                    'thallious@randomword.com',
                    'vernalizing@randomword.com',
                    'nekhbetv@randomword.com',
                    'unsmocke@randomword.com',
                    'nonprojective@randomword.com',
                    'nonconductible@randomword.com',
                    'gladsomeness@randomword.com',
                    'nongravitation@randomword.com',
                    'restatement@randomword.com',
                    'pokeys@randomword.com',
                    'epis@randomword.com',
                    'successor@randomword.com',
                    'jurisprudentially@randomword.com',
                    'medullization@randomword.com',
                    'evan@randomword.com',
                    'outliver@randomword.com',
                    'antipode@randomword.com',
                    'sunshiny@randomword.com',
                    'microscopopy@randomword.com',
                    'enatic@randomword.com',
                    'smittle@randomword.com',
                    'musk@randomword.com',
                    'litui@randomword.com',
                    'aquarellist@randomword.com',
                    'chirac@randomword.com'
                ]
            };
        }
    }
];