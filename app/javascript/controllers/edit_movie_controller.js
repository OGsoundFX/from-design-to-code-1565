import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-movie"
export default class extends Controller {
  static targets = ["form", "title"]

  connect() {
  }
  
  displayForm() {
    this.formTarget.classList.toggle("d-none")
    this.titleTarget.classList.toggle("d-none")
  }

  updateMovie(event) {
    event.preventDefault()
    const url = this.formTarget.action;
    const options = {
      method: "PATCH",
      headers: {"Accept": "text/plain"},
      body: new FormData(this.formTarget)
    }

    fetch(url, options)
      .then(response => response.text())
      .then(data => {
        this.element.outerHTML = data
      })
  }
}
