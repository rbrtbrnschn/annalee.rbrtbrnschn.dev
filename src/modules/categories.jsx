import React, { Component } from 'react'
import CategoryItem from "./category_item"
import PackageListItem from "./package_list_item"
import BoxItem from "./box_item"

export default class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories:
                [{ name: "CSS", logo: "fab fa-css3-alt" }, { name: "JS", logo: "fab fa-js" }, { name: "HTML", logo: "fab fa-html5" }],
            packages: [{ name: "abc", desc: "no description given", code: "#!/bin/bash\n\nfunction abc {\n\tSTRING=\"a b c d e f g i f g h i j k l m n o p q r s t u v w x y z\"\n\tfor CHAR in $STRING;do\n\t\tCOLOR=$((1 + RANDOM % 10))\n\t\tprintf \"%s\" \"$(tput setaf $COLOR)\" \"$CHAR\" \"$(tput sgr0) \"\n\tdone\n\techo\n}" }]
        }

    }
    componentDidMount() {
        /*
        const uri = "http://localhost:8080/webapp"
        fetch(uri)
            .then(res => {
                res.json()
            })
            .then(res => {
                //const oldState = { ...this.state }
                console.log("res:", res)
                //this.setState()
            })
            */
    }

    render() {

        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-3">
                            <aside className="is-medium menu">
                                <p className="menu-label">
                                    categories
          </p>
                                <ul className="menu-list">
                                    {this.state.categories.map((item, i) => <CategoryItem item={item} />)}
                                </ul>
                                <p className="menu-label">
                                    More to read...
              </p>
                                <ul className="menu-list">
                                    {this.state.packages.map((item, i) => <PackageListItem item={item} />)}
                                </ul>

                            </aside>
                        </div>
                        <div className="column is-9">
                            <div className="content is-medium">
                                <h3 className="title is-3">Snippets ¯\_(ツ)_/¯</h3>
                                {this.state.packages.map((item, i) => <BoxItem item={item} />)}


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}