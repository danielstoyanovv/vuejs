Vue.createApp({
    data()
    {
        return {
            header: "All posts",
            posts: [],
            errors: [],
            author: null,
            content: null,
            successMessage: null
        }
    },
    mounted:function(){
        this.getAllPosts()
    },
    methods:{
        getAllPosts() {
            let mainThis = this
            axios.get('http://127.0.0.1:8000/api/posts?page=1&token=5u30e23n8fswko8oscgwsggkwokw0gc', {
            })
            .then(function (response) {
                mainThis.posts = response.data.data
            })

        },
        createPost() {
            let mainThis = this
            this.errors = []
            mainThis.successMessage = null  
        
            if (!this.author || this.author.length < 5 || this.author.length > 40) {
                this.errors.push("Author is not valid")

            }
            if (!this.content || this.content.length < 5 || this.content.length > 200) {
                this.errors.push("Content is not valid")

            }

            if (this.errors.length === 0) {
                
                const {data} = axios.post('http://127.0.0.1:8000/api/posts', {
                    author: this.author,
                    content: this.content,
                    token: "lpwnxdeg4w0w44k8044g4kws00ogo8k"
                }, {
                    headers: {
                    'Content-Type': 'application/json'
                    }
                })
                .then(function (response) {
                    if (response.status === 201) {

                        mainThis.successMessage = "New post created"
                        let post = {};
                        post['id'] =  response.data.data.id
                        post['author'] =  mainThis.author
                        post['content'] =  mainThis.content 
                        post['created_at'] =  (new Date()).toJSON()
                        let currentPosts =  mainThis.posts
                        let allPosts = []
                        allPosts = allPosts.concat(post)
                        allPosts = allPosts.concat(currentPosts)
                        mainThis.posts = allPosts
                        mainThis.author = null
                        mainThis.content = null
                    }    
                })
            }
        }

    }
}).mount("#posts-app")