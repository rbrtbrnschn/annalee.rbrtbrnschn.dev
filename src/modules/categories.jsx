import React, { Component } from 'react'
import CategoryItem from "./category_item"
import PackageListItem from "./package_list_item"
import BoxItem from "./box_item"
import Prism from "prismjs"

export default class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories:
                [{ name: "CSS", logo: "fab fa-css3-alt" }, { name: "JS", logo: "fab fa-js" }, { name: "HTML", logo: "fab fa-html5" }],
            packages: [{ name: "abc", desc: "no description given", code: "#!/bin/bash\n\nfunction abc {\n\tSTRING=\"a b c d e f g i f g h i j k l m n o p q r s t u v w x y z\"\n\tfor CHAR in $STRING;do\n\t\tCOLOR=$((1 + RANDOM % 10))\n\t\tprintf \"%s\" \"$(tput setaf $COLOR)\" \"$CHAR\" \"$(tput sgr0) \"\n\tdone\n\techo\n}" }],
            queryCategory: "",
            isQuerying: false,
            menuClasses: ["is-medium menu"]
        }

    }

    handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 400) {
            this.setState({ ...this.state, menuClasses: ["is-medium menu scrolled"] })
        }
        else {
            this.setState({ ...this.state, menuClasses: ["is-medium menu"] })

        }
    }

    handleCategoryChange = (category) => {
        const currentState = { ...this.state }
        const currentQuery = currentState.queryCategory
        const isNewQuery = currentQuery !== category
        let boo = isNewQuery
        if (isNewQuery && currentState.isQuerying) boo = true

        this.setState({ ...currentState, queryCategory: category, isQuerying: boo })
    }

    handleCategoryAll = () => {
        this.setState({ ...this.state, isQuerying: false })
    }

    componentDidMount() {
        const dev = true
        const packages_uri = dev ? "https://annalee.rbrtbrnschn.dev/api/webapp" : "/api/webapp"
        fetch(packages_uri)
            .then(res =>
                res.json()
            )
            .then(result => {
                const oldState = { ...this.state }
                this.setState({ ...oldState, packages: result })
            })
        const categories_uri = dev ? "https://annalee.rbrtbrnschn.dev/api/topCategories" : "/api/topCategories"
        fetch(categories_uri)
            .then(res =>
                res.json()
            )
            .then(result => {
                const oldState = { ...this.state }
                this.setState({ ...oldState, categories: result })
            })
        window.addEventListener("scroll", this.handleScroll)
    }

    componentDidUpdate() {
        Prism.highlightAll()
    }

    render() {

        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-3">
                            <aside className={this.state.menuClasses}>
                                <p className="menu-label">
                                    categories
          </p>
                                <ul className="menu-list">
                                    <CategoryItem key="category-all" item={{ name: "All" }} handleChange={this.handleCategoryAll} />
                                    {this.state.categories.map((item, i) => <CategoryItem key={"category-" + i} item={item} handleChange={this.handleCategoryChange} />)}
                                </ul>
                                <p className="menu-label">
                                    Packages
              </p>
                                <ul className="menu-list">
                                    {
                                        this.state.packages.map((item, i) => {
                                            if (!this.state.isQuerying) return <PackageListItem key={"package--item-" + i} item={item} />

                                            return item.categories === this.state.queryCategory
                                                ? <PackageListItem key={"package--item-" + i} item={item} />
                                                : <div key={"div-item-" + i}> </div>

                                        })
                                    }

                                </ul>

                            </aside>
                        </div>
                        <div className="column is-9">
                            <div className="content is-medium">
                                <h3 className="title is-3">Snippets ¯\_(ツ)_/¯</h3>
                                {
                                    this.state.packages.map((item, i) => {
                                        if (!this.state.isQuerying) return <BoxItem key={"box-item-" + i} item={item} />

                                        return item.categories === this.state.queryCategory
                                            ? <BoxItem key={"box-item-" + i} item={item} />
                                            : <div key={"div-item-" + i}> </div>
                                    })}


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
