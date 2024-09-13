class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
                <div class=" col-lg-10 mx-auto col-md-12 col-sm-12 col-xs-12 p-0">
                    <nav class="navbar navbar-expand-md navbar-light bg-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">Cashier Portal</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Maintenance
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                                            <li><a class="dropdown-item" href="#">Periodic maintenance</a></li>
                                            <li><a class="dropdown-item" href="device_data.html">Receiving a device</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Reports
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                                            <li><a class="dropdown-item" href="#">Treasury journal</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Sales
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
                                            <li><a class="dropdown-item" href="customer_bal.html">Customers Balance</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Warehouses
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
                                            <li><a class="dropdown-item" href="inventory.html">Warehouse Inventory</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="dashboard.html" id="navbarDropdown3" role="button"
                                            aria-expanded="false">
                                            Dashboard
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        `
    }
}

customElements.define('my-navbar', MyNavbar)