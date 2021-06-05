({
        handleSuccess : function(component, event) {
            component.find('notifLib').showToast({
                "variant": "success",
                "title": "Account Created",
                "message": "Record ID: " + event.getParam("id")
            });
        }
})
