import * as React from "react"

const IndexPage = () => {
    return (
        <main>
            <form
                name="contact"
                method="POST"
                netlify-honeypot="bot-field"
                data-netlify="true"
            >
                <p className="hidden">
                    <label>
                        Don’t fill this out if you’re human: <input name="bot-field"/>
                    </label>
                </p>
                <p>
                    <label>
                        Email: <input type="text" name="email"/>
                    </label>
                </p>
                <p>
                    <label>
                        Message: <textarea name="message"></textarea>
                    </label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>

        </main>
    )
}

export default IndexPage
