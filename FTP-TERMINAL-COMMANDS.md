# 🖥️ FTP TERMINAL COMMANDS - HOSTINGER UPLOAD

## 🔐 YOUR FTP CREDENTIALS:

```
Host: 141.136.39.103
Username: u270993738
Password: H@mmad123477
Port: 21
```

---

## 📋 STEP-BY-STEP TERMINAL COMMANDS:

### **STEP 1: Open Terminal/Command Prompt**

**Windows:**
- Press `Win + R`
- Type `cmd`
- Press Enter

**Or in SmartFTP:**
- Tools → Terminal
- Or View → Terminal

---

### **STEP 2: Connect to FTP Server**

```bash
ftp 141.136.39.103
```

**You'll see:**
```
Connected to 141.136.39.103
220 ProFTPD Server ready.
User (141.136.39.103:(none)):
```

---

### **STEP 3: Enter Username**

```bash
u270993738
```

**Press Enter**

**You'll see:**
```
331 Password required for u270993738
Password:
```

---

### **STEP 4: Enter Password**

```bash
H@mmad123477
```

**Press Enter** (password won't show while typing)

**You'll see:**
```
230 User u270993738 logged in
ftp>
```

✅ **Connected!**

---

### **STEP 5: Navigate to public_html**

```bash
cd public_html
```

**You'll see:**
```
250 CWD command successful
ftp>
```

---

### **STEP 6: List Files (Optional - to see what's there)**

```bash
ls
```

**Or for detailed list:**
```bash
dir
```

---

### **STEP 7: Delete Old Files**

**Delete all files one by one:**

```bash
delete index.html
delete 404.html
delete .htaccess
```

**Or delete all at once (if supported):**
```bash
mdelete *
```

**Confirm with 'y' for each file**

**Delete folders:**
```bash
rmdir _next
rmdir about
rmdir services
```

**Note:** Folders must be empty before deleting

---

### **STEP 8: Enable Binary Mode (Important for images/files)**

```bash
binary
```

**You'll see:**
```
200 Type set to I
```

---

### **STEP 9: Upload Files**

**Navigate to your local folder first:**

```bash
lcd D:\Personal projects\website-development-plan\HOSTINGER-UPLOAD
```

**Upload single file:**
```bash
put index.html
put 404.html
put .htaccess
```

**Upload multiple files:**
```bash
mput *.html
mput *.jpg
mput *.png
mput *.svg
```

**Confirm with 'y' for each file**

---

### **STEP 10: Upload Folders**

**For folders, you need to:**

1. **Create folder on server:**
```bash
mkdir _next
```

2. **Navigate into it:**
```bash
cd _next
```

3. **Navigate locally:**
```bash
lcd _next
```

4. **Upload files:**
```bash
mput *
```

5. **Go back:**
```bash
cd ..
lcd ..
```

**Repeat for all folders:**
- about
- services
- industries
- careers
- contact
- privacy
- terms
- velqa-publishers

---

### **STEP 11: Verify Upload**

```bash
ls
```

**Check all files are there**

---

### **STEP 12: Disconnect**

```bash
bye
```

**Or:**
```bash
quit
```

---

## 🚀 COMPLETE COMMAND SEQUENCE:

```bash
# Connect
ftp 141.136.39.103

# Login
u270993738
H@mmad123477

# Navigate
cd public_html

# List files
ls

# Delete old files (if any)
mdelete *

# Set binary mode
binary

# Navigate to local folder
lcd D:\Personal projects\website-development-plan\HOSTINGER-UPLOAD

# Upload HTML files
put index.html
put 404.html
put .htaccess
put robots.txt
put sitemap.xml
put manifest.json

# Upload images
mput *.jpg
mput *.png
mput *.svg

# Create and upload _next folder
mkdir _next
cd _next
lcd _next
mkdir static
cd static
lcd static
mkdir chunks
cd chunks
lcd chunks
mput *
cd ..
lcd ..
mkdir css
cd css
lcd css
mput *
cd ../../../
lcd ../../../

# Create and upload page folders
mkdir about
cd about
lcd about
put index.html
cd ..
lcd ..

# Repeat for other folders...

# Disconnect
bye
```

---

## 💡 USEFUL FTP COMMANDS:

| Command | Description |
|---------|-------------|
| `ftp [host]` | Connect to FTP server |
| `open [host]` | Open connection |
| `user [username]` | Login with username |
| `cd [folder]` | Change remote directory |
| `lcd [folder]` | Change local directory |
| `ls` | List remote files |
| `dir` | Detailed list of remote files |
| `pwd` | Show current remote directory |
| `lpwd` | Show current local directory |
| `get [file]` | Download file |
| `put [file]` | Upload file |
| `mget [pattern]` | Download multiple files |
| `mput [pattern]` | Upload multiple files |
| `delete [file]` | Delete remote file |
| `mdelete [pattern]` | Delete multiple files |
| `mkdir [folder]` | Create remote folder |
| `rmdir [folder]` | Delete remote folder |
| `binary` | Set binary transfer mode |
| `ascii` | Set ASCII transfer mode |
| `status` | Show connection status |
| `bye` or `quit` | Disconnect and exit |
| `help` | Show help |

---

## ⚠️ IMPORTANT NOTES:

### **1. Binary Mode:**
Always use `binary` mode for:
- Images (.jpg, .png, .svg)
- JavaScript files (.js)
- CSS files (.css)
- Any non-text files

### **2. Folder Upload:**
FTP terminal doesn't support recursive folder upload.
You need to:
- Create each folder manually
- Navigate into it
- Upload files
- Go back and repeat

### **3. Wildcards:**
- `*` = all files
- `*.html` = all HTML files
- `*.jpg` = all JPG images

### **4. Confirmation:**
`mput` and `mdelete` will ask for confirmation for each file.
To skip confirmation:
```bash
prompt
```
This toggles interactive mode on/off.

---

## 🔧 TROUBLESHOOTING:

### **Problem 1: Connection refused**

**Solution:**
```bash
# Try with explicit port
ftp
open 141.136.39.103 21
```

### **Problem 2: Login incorrect**

**Solution:**
- Check username: `u270993738`
- Check password: `H@mmad123477`
- Password is case-sensitive

### **Problem 3: Permission denied**

**Solution:**
```bash
# Make sure you're in public_html
pwd
cd public_html
```

### **Problem 4: Upload fails**

**Solution:**
```bash
# Switch to binary mode
binary

# Check connection
status
```

### **Problem 5: Can't see .htaccess**

**Solution:**
```bash
# List all files including hidden
ls -la
```

---

## 🚀 EASIER METHOD - USE SMARTFTP GUI:

Terminal commands are complex for uploading many files.

**Recommended:**
1. Use SmartFTP GUI interface
2. Connect with same credentials
3. Drag and drop files
4. Much faster and easier!

**SmartFTP GUI Steps:**
1. File → New Connection
2. Enter credentials
3. Connect
4. Navigate to public_html
5. Delete old files
6. Drag HOSTINGER-UPLOAD folder contents
7. Done!

---

## 📁 FILES TO UPLOAD:

**Location:** `D:\Personal projects\website-development-plan\HOSTINGER-UPLOAD\`

**Total files:** 100+ files and folders

**Recommendation:** Use GUI instead of terminal for this many files!

---

## 🎯 QUICK TERMINAL UPLOAD (Essential Files Only):

If you want to use terminal, upload essential files first:

```bash
ftp 141.136.39.103
u270993738
H@mmad123477
cd public_html
binary
lcd D:\Personal projects\website-development-plan\HOSTINGER-UPLOAD
put index.html
put .htaccess
put 404.html
mput *.jpg
mput *.png
bye
```

Then use SmartFTP GUI for folders and remaining files.

---

## 📞 RECOMMENDATION:

**Terminal FTP is good for:**
- ✅ Quick file uploads
- ✅ Single file transfers
- ✅ Automation/scripts

**SmartFTP GUI is better for:**
- ✅ Multiple files and folders
- ✅ Visual interface
- ✅ Drag and drop
- ✅ Progress tracking
- ✅ Resume failed uploads

**For your website (100+ files), use SmartFTP GUI!**

---

## 🔐 YOUR CREDENTIALS (Updated):

```
Host: 141.136.39.103
Username: u270993738
Password: H@mmad123477
Port: 21
```

---

## 🎉 FINAL NOTE:

Terminal commands work but are tedious for many files.

**Best approach:**
1. Use SmartFTP GUI
2. Connect with credentials above
3. Drag and drop HOSTINGER-UPLOAD folder
4. Wait 5-10 minutes
5. Done!

**Good luck bhai!** 🍀
