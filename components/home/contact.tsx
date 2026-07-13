import Container from "../ui/container";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-14"
        >
            <Container>
                {/* Header Section */}
                <div className="space-y-2">
                    <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                        <span className="text-primary">$</span> cat contact.me | grep "Open"
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight">
                        Get in Touch
                    </h2>
                    <p className="text-muted-foreground max-w-xl text-base leading-7">
                        Interested in working together or just want to say hi? Send me a message.
                    </p>
                </div>

                {/* Contact Form / Info Section */}
                <div>

                </div>


            </Container>
        </section>
    );
}