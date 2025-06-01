import ColorData from "@/app/components/design/ColorData";

export default function DesignPage() {
    return (
        <>
            <h1>Design Page</h1>

            {/* colors */}
            <section>
                <h2>1.00 color</h2>

                <div>
                    <ColorData />
                    <ColorData variant="accent2"/>
                </div>
            </section>
        </>
    );
};