document.addEventListener('DOMContentLoaded', function() {
    const tabContainer = document.getElementsByClassName('tab-container')[0]
    const buttons = tabContainer.querySelectorAll('button')
    const panels = tabContainer.querySelectorAll('.tab-panel')

    function showTab(tabId) {
        buttons.forEach((button) => button.classList.remove('active'))
        panels.forEach((panel) => panel.classList.remove('active'))

        const selectedButton = tabContainer.querySelector(`button[data-tab=${tabId}]`)
        selectedButton.classList.add('active')

        const tabPanel = tabContainer.querySelector(`#${tabId}`)
        tabPanel.classList.add('active')
    }
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = button.getAttribute('data-tab')
            showTab(tabId)
        })
    });
})