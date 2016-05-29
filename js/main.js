(function (EMS, Handlebars) {

    renderView(EMS.getEmployees());

    $("form").addEventListener("submit", onSubmit);


    // Methods
    // *******************************************************

    function onSubmit (e) {
        e.preventDefault();
        EMS.addEmployee(getSerialized(this));
        renderView(EMS.getEmployees());
    }

    function getSerialized (form) {
        var inputs = form.querySelectorAll("[name]");
        var data = {};
        forEach(inputs, function (input) {
            data[input.name] = input.value;
        });
        return data;
    }

    function renderView (data) {
        var source = $("#employee-template").textContent;
        var template = Handlebars.compile(source);
        var employeesHtml = template(data);

        $(".Employees").innerHTML = employeesHtml;
    }

    function $ (selector) {
        return document.querySelector(selector);
    }

    function forEach (list, func) {
        return [].forEach.call(list, func);
    }

}(window.EMS, window.Handlebars));
