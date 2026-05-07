// Initialize drafts array from LocalStorage
let drafts = JSON.parse(localStorage.getItem('insuranceDrafts')) || [];

function saveDraft() {
    const id = new URLSearchParams(window.location.search).get('id') || Date.now().toString();
    const quoteData = {
        id: id,
        type: document.getElementById('quoteType').value,
        name: document.getElementById('clientName').value,
        address: document.getElementById('address').value,
        details: document.getElementById('details').value,
        premium: document.getElementById('premium').value,
        status: 'Draft'
    };

    // Check if updating existing or adding new
    const existingIndex = drafts.findIndex(d => d.id === id);
    if (existingIndex > -1) {
        drafts[existingIndex] = quoteData;
    } else {
        drafts.push(quoteData);
    }

    localStorage.setItem('insuranceDrafts', JSON.stringify(drafts));
    alert('Draft Saved Successfully!');
    window.location.href = "dashboard.html";
}

function loadDashboard() {
    const tbody = document.querySelector('#draftTable tbody');
    tbody.innerHTML = '';

    drafts.forEach(draft => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${draft.name}</td>
            <td>${draft.type}</td>
            <td>${draft.status}</td>
            <td>
                <button class="btn btn-blue" onclick="editDraft('${draft.id}')">Edit</button>
                <button class="btn btn-danger" onclick="deleteDraft('${draft.id}')">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function editDraft(id) {
    window.location.href = `quote-form.html?id=${id}`;
}

function deleteDraft(id) {
    if(confirm('Are you sure you want to delete this draft?')) {
        drafts = drafts.filter(d => d.id !== id);
        localStorage.setItem('insuranceDrafts', JSON.stringify(drafts));
        loadDashboard();
    }
}

function loadFormData() {
    const id = new URLSearchParams(window.location.search).get('id');
    if (id) {
        const draft = drafts.find(d => d.id === id);
        if (draft) {
            document.getElementById('quoteType').value = draft.type;
            document.getElementById('clientName').value = draft.name;
            document.getElementById('address').value = draft.address;
            document.getElementById('details').value = draft.details;
            document.getElementById('premium').value = draft.premium;
        }
    }
}

function generateQuotePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const type = document.getElementById('quoteType').value;
    const name = document.getElementById('clientName').value;
    const address = document.getElementById('address').value;
    const details = document.getElementById('details').value;
    const premium = document.getElementById('premium').value;

    doc.setFontSize(22);
    doc.text("Official Insurance Quote", 20, 20);
    
    doc.setFontSize(14);
    doc.text(`Quote Type: ${type} Insurance`, 20, 40);
    doc.text(`Client Name: ${name}`, 20, 50);
    doc.text(`Property/Risk Address: ${address}`, 20, 60);
    
    doc.text("Underwriting Details:", 20, 80);
    doc.setFontSize(12);
    doc.text(details, 20, 90, { maxWidth: 170 });

    doc.setFontSize(16);
    doc.text(`Estimated Annual Premium: $${premium}`, 20, 130);

    // Save the PDF
    doc.save(`${name.replace(/\s+/g, '_')}_Quote.pdf`);
    
    // Update status to Issued
    saveDraftStatus('Issued');
}

function saveDraftStatus(status) {
    document.getElementById('premium').value = document.getElementById('premium').value || 0; // ensure value
    saveDraft(); // Re-use save logic but you'd tweak this in a real app to just update status
}
