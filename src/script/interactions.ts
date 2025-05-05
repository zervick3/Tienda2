


interface Product {
  // Define the properties of your product here
  id: number;
  name: string;
  // ... other properties
}

export function paginateProducts(products: any[], currentPage: number, productsPerPage: number) {
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  return products.slice(startIndex, endIndex);
}


export function createPaginationButtons(totalPages: number, currentPage: number) {
    const buttons = [];
    if (currentPage > 1) {
        buttons.push('←');
    }
    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(i);
        }
    }
    else {
        if (currentPage > 3) {
            buttons.push(1);
            buttons.push('...');
        }
        if (currentPage === totalPages) {
            buttons.push(currentPage - 2);
            buttons.push(currentPage - 1);
        }
        else if (currentPage === totalPages - 1) {
            buttons.push(currentPage - 1);
            buttons.push(currentPage);
        }
        else {
            buttons.push(currentPage - 1);
            buttons.push(currentPage);
            buttons.push(currentPage + 1);
        }
        if (currentPage < totalPages - 2) {
            buttons.push('...');
            buttons.push(totalPages);
        }
    }
    if (currentPage < totalPages) {
        buttons.push('→');
    }
    return buttons;
}

export function handlePaginationButtonClick(event: MouseEvent, products: any[], productsPerPage:number) {
    const target = event.target as HTMLElement;
    const paginationSection = document.querySelector('.pagination');
    if (!paginationSection) {
        console.error('Pagination section not found.');
        return;
    }
    const productSection = document.querySelector('.product-grid');
    if (!productSection) {
        console.error('Product section not found.');
        return;
    }
    const currentPageElement = paginationSection.querySelector('.page-btn.active') as HTMLElement;
    let currentPage = Number(currentPageElement.textContent);
    
    if (target.textContent === '←') {
      currentPage--;
    } else if (target.textContent === '→') {
      currentPage++;
    } else if (target.textContent !== '...') {
        currentPage = Number(target.textContent);
    }
    updateProductSection(products,currentPage,productsPerPage, productSection);
    updatePaginationSection(products.length, currentPage,productsPerPage, paginationSection);
}

export function updateProductSection(products: any[], currentPage: number, productsPerPage:number, productSection: HTMLElement) {
    const productsToDisplay = paginateProducts(products, currentPage, productsPerPage);
    productSection.innerHTML = '';
    productsToDisplay.forEach(product => {
        // Use your existing product card HTML and populate it with product data
        productSection.innerHTML += `<div class="product-card"> <div class="product-img"> <div class="category-label">${product.categoria}</div><img src=${product.image} alt=${product.name} width="300px" height="200px"/></div> <div class="product-content"> <h3 class="product-title">${product.name}</h3><p class="product-description">${product.descripcion}</p><div class="product-footer"><span class="product-code">${product.codigo}</span><button class="product-btn"><a class="btn card_btn text-center" target="_blank" href=${product.ficha}>Ficha Técnica</a></button></div></div></div>`;
    });
}

export function updatePaginationSection(totalProducts: number, currentPage: number, productsPerPage:number, paginationSection: HTMLElement) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const buttons = createPaginationButtons(totalPages, currentPage);
    paginationSection.innerHTML = '';
    buttons.forEach(page => {
        paginationSection.innerHTML += `<button class="page-btn ${page === currentPage ? 'active' : ''}">${page}</button>`;
    });
}
export function setupInteractions() {
  const filterButtons = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log('Filter button pressed:', button.textContent);
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
    });
  });

  const viewButtons = document.querySelectorAll<HTMLButtonElement>('.view-btn');
  viewButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log('View button pressed:', button.textContent);
      viewButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  // Search functionality
  const searchInput = document.querySelector('.search-input') as HTMLInputElement | null;
  const searchButton = document.querySelector('.search-btn') as HTMLButtonElement | null;

  if (searchInput && searchButton) {
    searchButton.addEventListener('click', () => {
      searchProducts(searchInput.value);
    });

    // Allow search on Enter key press
    searchInput.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        searchProducts(searchInput.value);
      }
    });
  } else {
    console.error('No se encontró el input o el botón de búsqueda.');
  }
}

function searchProducts(value: string) {
    if (value) {
        console.log("Searching for:", value)
        alert("Buscando: " + value);
    }
}