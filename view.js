// ---- Define your dialogs  and panels here ----





let tip_hide = true;
let def_hide = true;

function showTips() {
    if(tip_hide) {
        $('#tip-list').css('display', 'block');
        tip_hide = false;
    } else {
        $('#tip-list').css('display', 'none');
        tip_hide = true;
    }
}

function showDefs() {
    if(def_hide) {
        $('#def-list').css('display', 'block');
        def_hide = false;
    } else {
        $('#def-list').css('display', 'none');
        def_hide = true;
    }
}



$('#toprightsidepanel').html(`

    <div class=definition2>
    <h1>Please Read the Following Before Starting:</h1>
    <br>
    <h2>Step 1: Take around 30 seconds making sure you truly understand the prompt. Identify the task to be completed in the prompt.
    </h2>
    <br>
    <h2>Step 2: Take around 15 seconds clearly identifying the File/Folder, User & Permission Status to be worked on.  
    </h2>
    <br>
    <h2>Step 3: You are now good to begin! Remember to look at the Hints.
    </h2>
    
    </div>

    <div id="tips" class="definition1">
    <h3 id="tip-header">Helpful Tips (Click to Show):</h3>
    <div id="tip-list" style="display:none">
        <br>

        <div class=definition1>
        <h3>Frequently look at the Prompt to ensure that the correct permissions are set</h3>
        </div>

        <div class=definition1>
        <h3>Ensure that you are changing the permissions in the CORRECT folder</h3>
        </div>

        <div class=definition1>
        <h3>Read_Execute has more functionalities than Read, so read directions carefully</h3>
        </div>

        <div class=definition1>
        <h3>Sometimes, you might just be overthinking it. Keep it Simple!!!</h3>
        </div>

    </div>
    </div>

    <br>

    <div id="defs" class=definition1>
        <h3 id="def-header">Definitions (Click to Show):</h3>

        <div id="def-list" style="display:none">
        <br>
        <div class="definition1">
            <h2>Advanced Permissions:</h2>
            <p>The Advanced Permissions button will take you to the advanced security settings. When you click the edit more permissions button, you will be directed to a more extensive list of permissions.</p>
        </div>

        <div class="definition1">
            <h2>Permissions:</h2>
            <p>In file systems and databases, permissions determine who can access an object (like a file or folder) and what they can do with it (read it, modify it, delete it, etc.).</p>
        </div>

        <div class="definition1">
            <h2>Inheritable Permissions:</h2>
            <p>Some systems allow permissions to be \"inherited\". This means that a file or folder can receive permissions based on the permissions of its parent folder.
                                     So, if you have a folder that's set to be readable by a certain user, all the files and subfolders inside that folder might automatically be readable by that user too,
                                     if they inherit permissions from the parent folder.</p>
        </div>

        <div class="definition1">
            <h2>This Object's Parent:</h2>
            <p>This refers to the folder (or sometimes another type of object) immediately above the current object in the hierarchy.
                                    If you think of your file system as a tree, the \"parent\" of any given file or folder is the folder it's directly inside of.</p>
        </div>

        <div class="definition1">
            <h2>Example Explained:</h2>
            <p>When a user tries to do something (read, modify, delete, change permissions, …) to a file: First: Look at all of the direct (i.e. not inherited)
                                    permissions that are set on this file for this user OR for any groups that this user is part of. if any of these are set to deny permission, then permission is denied.
                                   (otherwise) if any of these are set to allow the permission, then the action is allowed to happen. If (a) there were no direct permissions for this user,
                                   AND (b) inheritance is turned on for this file/folder, repeat the process above using the permissions for the parent folder. Lastly: if you have exhausted the options available via inheritance,
                                   and still have not found any relevant permission settings, then permission is denied.</p>
        </div>
        </div>
    </div>

    <div class=definition2>
    <h4>(Temporary Reference) User Steps:</h4>

    <h4>Task 1:</h4>
    <h4>Task 2: intern_permissions: 1. Click on intern_subproject. 2. Click on intern. 3.  Select 'Allow' for 'Write'. 4. Finished.</h4>
    <h4>Task 3:</h4>
    </div>

    <div class=definition2>
    <h4>(Temporary) What changes should we make?:</h4>

    <h4> - Remove excessive wordings. It can be overloading for the user. For example, we don't need the "Hint" in 
    the top of the dialog box. </h4>
    <h4> - Maybe say there is no need to do anything for delete files(in case User gets confused) for Task 2.</h4>
    <h4> - Maybe have a list of hints in the dialog box that can guide user</h4>

    </div>

    `);

$(document).on('click', '#tip-header', showTips);
$(document).on('click', '#def-header', showDefs);

//definitions panel
// $('#sidepanel').html(`<h1>Helpful Definitions</h1>
//                     <h2>Advanced Permissions: </h2>
//                         <p>The Advanced Permissions button will take you to the advanced secruity settings.
//                         When you click the edit more permissions button, you will directed to a more extensive list of permissions.</p>
//                     <h2>Permissions:</h2>
//                         <p>In file systems and databases, permissions determine who can access an object (like a file or folder)
//                         and what they can do with it (read it, modify it, delete it, etc.).</p>
//                     <h2>Inheritable permissions:</h2>
//                         <p>Some systems allow permissions to be \"inherited\". This means that a file or folder can receive permissions based on the permissions of its parent folder.
//                         So, if you have a folder that's set to be readable by a certain user, all the files and subfolders inside that folder might automatically be readable by that user too,
//                         if they inherit permissions from the parent folder.</p>
//                     <h2>This object's parent:</h2>
//                         <p>This refers to the folder (or sometimes another type of object) immediately above the current object in the hierarchy.
//                         If you think of your file system as a tree, the \"parent\" of any given file or folder is the folder it's directly inside of.</p>
//                     <h2>Example Explained:</h2>
//                         <p>When a user tries to do something (read, modify, delete, change permissions, …) to a file: First: Look at all of the direct (i.e. not inherited)
//                         permissions that are set on this file for this user OR for any groups that this user is part of. if any of these are set to deny permission, then permission is denied.
//                         (otherwise) if any of these are set to allow the permission, then the action is allowed to happen. If (a) there were no direct permissions for this user,
//                         AND (b) inheritance is turned on for this file/folder, repeat the process above using the permissions for the parent folder. Lastly: if you have exhausted the options available via inheritance,
//                         and still have not found any relevant permission settings, then permission is denied.</p>`);


// // ---- Display file structure ----
// $('#sidepanel').html(`
//     <div class="definitions">
//         <h1>Definitions:</h1>

//         <div class="definition1">
//             <h2>Advanced Permissions:</h2>
//             <p>The Advanced Permissions button will take you to the advanced security settings. When you click the edit more permissions button, you will be directed to a more extensive list of permissions.</p>
//         </div>

//         <div class="definition1">
//             <h2>Permissions:</h2>
//             <p>In file systems and databases, permissions determine who can access an object (like a file or folder) and what they can do with it (read it, modify it, delete it, etc.).</p>
//         </div>

//         <div class="definition1">
//             <h2>Inheritable Permissions:</h2>
//             <p>Some systems allow permissions to be \"inherited\". This means that a file or folder can receive permissions based on the permissions of its parent folder.
//                                      So, if you have a folder that's set to be readable by a certain user, all the files and subfolders inside that folder might automatically be readable by that user too,
//                                      if they inherit permissions from the parent folder.</p>
//         </div>

//         <div class="definition1">
//             <h2>This Object's Parent:</h2>
//             <p>This refers to the folder (or sometimes another type of object) immediately above the current object in the hierarchy.
//                                     If you think of your file system as a tree, the \"parent\" of any given file or folder is the folder it's directly inside of.</p>
//         </div>

//         <div class="definition1">
//             <h2>Example Explained:</h2>
//             <p>When a user tries to do something (read, modify, delete, change permissions, …) to a file: First: Look at all of the direct (i.e. not inherited)
//                                     permissions that are set on this file for this user OR for any groups that this user is part of. if any of these are set to deny permission, then permission is denied.
//                                    (otherwise) if any of these are set to allow the permission, then the action is allowed to happen. If (a) there were no direct permissions for this user,
//                                    AND (b) inheritance is turned on for this file/folder, repeat the process above using the permissions for the parent folder. Lastly: if you have exhausted the options available via inheritance,
//                                    and still have not found any relevant permission settings, then permission is denied.</p>
//         </div>
//     </div>
// `);

var style = document.createElement('style');
style.type = 'text/css';


var css = `

#filestructure, #toprightsidepanel {
    display: inline-block;
    width: 50%;
    vertical-align: top; 
}

#toprightsidepanel {
    font-family: Arial, sans-serif;
    padding: 15px;
    background-color: #f8f8f8;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    z-index: 100;
}


#sidepanel {
    font-family: Arial, sans-serif;
    padding: 15px;
    background-color: #f8f8f8;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    display: block;
    width: 50%;
}


.definitions h1 {
    color: #333;
    margin-bottom: 20px;
}

.definition {
    background-color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    font-size: 20px;
}

.definition1 {
    background-color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.definition2 {
    background-color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.definition h2 {
    color: #0056b3;
    margin-bottom: 5px;
}

.definition p {
    line-height: 1.6;
    color: #666;
}
`;


if (style.styleSheet) {
   
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}


document.head.appendChild(style);



// (recursively) makes and returns an html element (wrapped in a jquery object) for a given file object
function make_file_element(file_obj) {
    let file_hash = get_full_path(file_obj)

    if(file_obj.is_folder) {
        let folder_elem = $(`<div class='folder' id="${file_hash}_div">
            <h3 id="${file_hash}_header">
                <span class="oi oi-folder" id="${file_hash}_icon"/> ${file_obj.filename} 
                <button class="ui-button ui-widget ui-corner-all permbutton" path="${file_hash}" id="${file_hash}_permbutton"> 
                    <span class="oi oi-lock-unlocked" id="${file_hash}_permicon"> Click Here to Change Permissions</span> 
                </button>
            </h3>
        </div>`)

        // append children, if any:
        if( file_hash in parent_to_children) {
            let container_elem = $("<div class='folder_contents'></div>")
            folder_elem.append(container_elem)
            for(child_file of parent_to_children[file_hash]) {
                let child_elem = make_file_element(child_file)
                container_elem.append(child_elem)
            }
        }
        return folder_elem
    }
    else {
        return $(`<div class='file'  id="${file_hash}_div">
            <span class="oi oi-file" id="${file_hash}_icon"/> ${file_obj.filename}
            <button class="ui-button ui-widget ui-corner-all permbutton" path="${file_hash}" id="${file_hash}_permbutton"> 
            <span class="oi oi-lock-unlocked" id="${file_hash}_permicon"> Click Here to Change Permissions</span> 
            </button>
        </div>`)
    }
}

for(let root_file of root_files) {
    let file_elem = make_file_element(root_file)
    $( "#filestructure" ).append( file_elem);    
}



// make folder hierarchy into an accordion structure
$('.folder').accordion({
    collapsible: true,
    heightStyle: 'content'
}) // TODO: start collapsed and check whether read permission exists before expanding?


// -- Connect File Structure lock buttons to the permission dialog --

// open permissions dialog when a permission button is clicked
$('.permbutton').click( function( e ) {
    // Set the path and open dialog:
    let path = e.currentTarget.getAttribute('path');
    perm_dialog.attr('filepath', path)
    perm_dialog.dialog('open')
    //open_permissions_dialog(path)

    // Deal with the fact that folders try to collapse/expand when you click on their permissions button:
    e.stopPropagation() // don't propagate button click to element underneath it (e.g. folder accordion)
    // Emit a click for logging purposes:
    emitter.dispatchEvent(new CustomEvent('userEvent', { detail: new ClickEntry(ActionEnum.CLICK, (e.clientX + window.pageXOffset), (e.clientY + window.pageYOffset), e.target.id,new Date().getTime()) }))
});


// ---- Assign unique ids to everything that doesn't have an ID ----
$('#html-loc').find('*').uniqueId() 