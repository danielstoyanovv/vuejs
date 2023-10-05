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
            const config = {
                headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxMzAiLCJqdGkiOiIyZWY3MjE5MDYxOGYwZDE5OTVkNmJmNDRmNmMxMThmMGM5NDI1MGRlMTMyM2QwZDBiMzc0ZTdjMWVjNjhmNDEzNjI0NmFmN2JkZGE3NDU0YSIsImlhdCI6MTY5NjMxNjc3MS4xOTk3NjMsIm5iZiI6MTY5NjMxNjc3MS4xOTk3NjYsImV4cCI6MTcyNzkzOTE3MS4xODQ5NDIsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.HKyYvo0EPafCaJcvGO1Napn5uba__I3nC-rv_GysRvjjXxWgLuKNW0QyRAmsX6uD8N8hJ_oVYwJcIfcrcXAUOFYQynZmYS9KgbzxbrsodJiITsxHb6gqd4s8YyjaEEeHJ1jfsbk5-NdJPR6Rq6KZ5Vd1XNDFvgi_rBK8TxDpjLCmrEXSEb6VFywGBb-sVikQy4o4c4MBLX3shcDJOy6ngIbobUncYAW__UNPDKBwwYe97JSFZL9mr1-8BDlgPKOuVNV9VZYaMJX8qAbp2OXCryf8JnNFqDQJwyNbGr5h82mEqc60JwrNz2SsEP_3-gvTMAw08q_sXrAl_dIpmmZsFivXcoCyehljnp81_0njRJPDAgGAh48ESxFXyBuFD_xoJEv3kvfxWeezFXe3mjTZ-pgpBVQbzQfj28dHBebQcYyPt5NyHCr9X__XMp5L3RS5YKb4wbQCHMpLFfUW9kKMiddtx08eBRbuvhUggKomliAB8-dDpY2q6PLewGROFSIS5Pk0O1lW-OOVqCFehUr2GzpDIdPsIjjC2b-xwXKxn49Me7Er6IewLXp-c2aRRJVvWVUtsNlM_KugngmFCSi2fV-O6Jon6LqJq7QH9Es1dJ_Nrl-mGfWnAYaLTYdH-vVJzFpK71WPWCSsObbSUrHPBe5GMY-mzC-aQFSx_bbk0u0'}
            };
            let mainThis = this
            axios.get('http://127.0.0.1:8000/api/posts?page=1', config)
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
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxMzAiLCJqdGkiOiIyZWY3MjE5MDYxOGYwZDE5OTVkNmJmNDRmNmMxMThmMGM5NDI1MGRlMTMyM2QwZDBiMzc0ZTdjMWVjNjhmNDEzNjI0NmFmN2JkZGE3NDU0YSIsImlhdCI6MTY5NjMxNjc3MS4xOTk3NjMsIm5iZiI6MTY5NjMxNjc3MS4xOTk3NjYsImV4cCI6MTcyNzkzOTE3MS4xODQ5NDIsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.HKyYvo0EPafCaJcvGO1Napn5uba__I3nC-rv_GysRvjjXxWgLuKNW0QyRAmsX6uD8N8hJ_oVYwJcIfcrcXAUOFYQynZmYS9KgbzxbrsodJiITsxHb6gqd4s8YyjaEEeHJ1jfsbk5-NdJPR6Rq6KZ5Vd1XNDFvgi_rBK8TxDpjLCmrEXSEb6VFywGBb-sVikQy4o4c4MBLX3shcDJOy6ngIbobUncYAW__UNPDKBwwYe97JSFZL9mr1-8BDlgPKOuVNV9VZYaMJX8qAbp2OXCryf8JnNFqDQJwyNbGr5h82mEqc60JwrNz2SsEP_3-gvTMAw08q_sXrAl_dIpmmZsFivXcoCyehljnp81_0njRJPDAgGAh48ESxFXyBuFD_xoJEv3kvfxWeezFXe3mjTZ-pgpBVQbzQfj28dHBebQcYyPt5NyHCr9X__XMp5L3RS5YKb4wbQCHMpLFfUW9kKMiddtx08eBRbuvhUggKomliAB8-dDpY2q6PLewGROFSIS5Pk0O1lW-OOVqCFehUr2GzpDIdPsIjjC2b-xwXKxn49Me7Er6IewLXp-c2aRRJVvWVUtsNlM_KugngmFCSi2fV-O6Jon6LqJq7QH9Es1dJ_Nrl-mGfWnAYaLTYdH-vVJzFpK71WPWCSsObbSUrHPBe5GMY-mzC-aQFSx_bbk0u0'
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