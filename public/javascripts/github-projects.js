import Vue from "https://unpkg.com/vue@2.6.0/dist/vue.esm.browser.min.js"

var gh_projects = new Vue({
    el: "#github_projects",
    data: {
        title: "Repo-Title",
        owner: "bevinart",
        description: "Description of the Repo",
        language: "HTML",
        url: "http://www.github.com/bevinart",
        avatar_url: "https://avatars.githubusercontent.com/u/42657361?v=4",
        fork: false,

        len: 0,
        counter: 0
    },
    mounted() {
        this.SetRepo();
    },
    methods: {
        Change_i: function(num) {
            if (this.counter+num > this.len)
                this.counter=0;
            else if (this.counter+num < 0)
                this.counter=this.len-1;
            else
                this.counter+=num;

            this.SetRepo();
        },
        SetRepo: function() {
            $.getJSON('https://api.github.com/users/bevinart/repos', {
                tags: "github user bevinart repos",
                tagmode: "any",
                format: "json"
            })
             .done(function(data) {
                var ghp = gh_projects;
                var gh_num = ghp.counter;
                const gh = [data[gh_num]];

                ghp.title = gh[0]["name"];
                ghp.description = gh[0]["description"];
                ghp.language = gh[0]["language"];
                ghp.url = gh[0]["html_url"];
                ghp.owner = gh[0]["owner"]["login"];
                ghp.avatar_url = gh[0]["owner"]["avatar_url"]
                ghp.fork = gh[0]["fork"];

                ghp.len = data.length-1;
            });
        }
    }
})