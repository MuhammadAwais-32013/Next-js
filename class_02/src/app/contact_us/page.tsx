function contactUs() {
    return (
        
        <div>
            <h2>Contact Us</h2>
            <form>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message"  placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default contactUs;