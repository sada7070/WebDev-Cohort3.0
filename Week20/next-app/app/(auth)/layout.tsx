// layout.tsx allows me to give anything around the 'children'. It is mainly used for header and footer.
// layout.tsx only allows the folders which are inside its parent folder. layout.tsx will not affect 'user' folder.
// root file layout.tsx cannot overrule the layouts which are inside any folder.

import { ReactNode } from "react";

export default function AuthLayout({children}: {
    children: ReactNode                                 // 'ReactNode' means any type component in react.
}) {
    return <div>
        <div>header</div>
        {children}
        <div>footer</div>
    </div>
}