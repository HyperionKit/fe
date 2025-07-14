export function DocsTableOfContents() {
  return (
    <div className="space-y-2">
      <h3 className="font-medium">On this page</h3>
      <ul className="m-0 list-none">
        <li>
          <a href="#why-hyperkit" className="inline-block py-1 text-sm text-muted-foreground hover:text-foreground">
            Why Hyperkit?
          </a>
        </li>
        <li>
          <a
            href="#automatic-installation"
            className="inline-block py-1 text-sm text-muted-foreground hover:text-foreground"
          >
            Automatic Installation
          </a>
        </li>
        <li>
          <a
            href="#manual-installation"
            className="inline-block py-1 text-sm text-muted-foreground hover:text-foreground"
          >
            Manual Installation
          </a>
        </li>
        <li>
          <a href="#metis-protocol" className="inline-block py-1 text-sm text-muted-foreground hover:text-foreground">
            Metis Protocol
          </a>
        </li>
        <li>
          <a
            href="#hyperion-protocol"
            className="inline-block py-1 text-sm text-muted-foreground hover:text-foreground"
          >
            Hyperion Protocol
          </a>
        </li>
        <li>
          <a href="#" className="inline-block py-1 text-sm text-muted-foreground hover:text-foreground">
            Start building!
          </a>
        </li>
      </ul>
    </div>
  )
}
