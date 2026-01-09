# 🚀 SMARTFTP UPLOAD GUIDE - HOSTINGER

## ✅ SMARTFTP RECOMMENDED BY HOSTINGER

SmartFTP Hostinger ka recommended FTP client hai.

---

## 📋 STEP-BY-STEP GUIDE:

### **STEP 1: Download SmartFTP**

1. **Download karo:**
   - Go to: https://www.smartftp.com/download
   - Click "Download SmartFTP"
   - Free trial version download hoga

2. **Install karo:**
   - Downloaded file run karo
   - "Next" → "I Agree" → "Next" → "Install"
   - Installation complete hone ka wait karo
   - "Finish" click karo

---

### **STEP 2: Open SmartFTP**

1. SmartFTP open karo
2. First time open hoga to welcome screen aayega
3. "Continue" ya "Start" click karo

---

### **STEP 3: Create New Connection**

1. **Menu bar mein:**
   - Click "File" → "New Remote Browser"
   - Ya toolbar mein "New Connection" button click karo

2. **Connection dialog open hoga**

---

### **STEP 4: Enter FTP Details**

**Enter these details:**

```
Name: Velqa Technologies (ya koi bhi name)
Host: 141.136.39.103
Port: 21
Protocol: FTP
Username: u270993738
Password: Waasay@123
```

**Detailed steps:**

1. **General tab:**
   - Name: `Velqa Technologies`
   - Host: `141.136.39.103`
   - Port: `21`
   - Protocol: Select "FTP" (not SFTP)

2. **Login tab:**
   - Username: `u270993738`
   - Password: `Waasay@123`
   - Check "Save Password" (optional)

3. **Click "OK" or "Connect"**

---

### **STEP 5: Connect to Server**

1. Connection start hoga
2. Status window mein connection progress dikhega
3. Connected hone ke baad:
   - Left side: Your computer files
   - Right side: Hostinger server files

---

### **STEP 6: Navigate to public_html**

1. **Right side (Remote) mein:**
   - Folders list dikhegi
   - `public_html` folder dhundo
   - Double-click karke open karo

---

### **STEP 7: Delete Old Files**

1. **In public_html (right side):**
   - Select ALL files (Ctrl+A)
   - Press Delete key
   - Or right-click → Delete
   - Confirm deletion
   - Wait for deletion to complete
   - **VERIFY: public_html is EMPTY**

---

### **STEP 8: Navigate to HOSTINGER-UPLOAD Folder**

1. **Left side (Local) mein:**
   - Navigate to: `D:\Personal projects\website-development-plan\HOSTINGER-UPLOAD`
   - You'll see all website files

---

### **STEP 9: Upload All Files**

**Method 1 - Select All:**
1. Left side mein Ctrl+A (select all files)
2. Right-click → Upload
3. Or drag and drop to right side

**Method 2 - Drag and Drop:**
1. Select all files on left side
2. Drag them to right side (public_html)
3. Drop them

**Upload will start:**
- Progress bar dikhega
- Transfer queue mein files dikhenge
- Wait for all files to upload (5-10 minutes)

---

### **STEP 10: Verify Upload**

**Check these files exist in public_html (right side):**

**Critical Files:**
- ✓ .htaccess
- ✓ index.html
- ✓ 404.html
- ✓ robots.txt
- ✓ sitemap.xml

**Folders:**
- ✓ _next (with static/chunks and static/css)
- ✓ about
- ✓ services
- ✓ industries
- ✓ careers
- ✓ contact
- ✓ privacy
- ✓ terms
- ✓ velqa-publishers

**Images:**
- ✓ All .jpg files (31+ images)
- ✓ All .png files
- ✓ All .svg files

---

### **STEP 11: Disconnect**

1. Click "Disconnect" button
2. Or File → Disconnect
3. Close SmartFTP

---

### **STEP 12: Clear Browser Cache**

1. Press Ctrl+Shift+Delete
2. Select "All time"
3. Check "Cached images and files"
4. Click "Clear data"

---

### **STEP 13: Test Website**

1. Visit your domain
2. Check homepage loads
3. Check animations working
4. Check Industries section hover (golden)
5. Test navigation
6. Test all pages

---

## 🎯 SMARTFTP INTERFACE:

```
┌─────────────────────────────────────────────────────────┐
│ File  Edit  View  Transfer  Tools  Window  Help        │
│ [Connect] [Disconnect] [Refresh] [Upload] [Download]   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ Local (Your Computer)    │  Remote (Hostinger Server)  │
│                          │                             │
│ D:\Personal projects\... │  /public_html/             │
│                          │                             │
│ [Your files]             │  [Server files]            │
│                          │                             │
│ ← Drag files to upload → │                            │
│                          │                             │
├─────────────────────────────────────────────────────────┤
│ Transfer Queue                                          │
│ [Shows files being uploaded]                            │
│ Progress: ████████░░ 80%                               │
└─────────────────────────────────────────────────────────┘
```

---

## 💡 SMARTFTP TIPS:

### **Tip 1: Save Connection**
- After entering FTP details, connection save ho jayega
- Next time easily connect kar sakte ho

### **Tip 2: Transfer Queue**
- Bottom panel mein transfer progress dikhta hai
- Failed transfers bhi dikhte hain

### **Tip 3: Refresh**
- Right-click → Refresh to see updated files
- Or press F5

### **Tip 4: Resume Failed Uploads**
- Agar upload fail ho to automatically resume hoga
- Ya manually retry kar sakte ho

### **Tip 5: Synchronize**
- Tools → Synchronize
- Automatically compare and upload changed files

---

## 🔧 TROUBLESHOOTING:

### **Problem 1: Can't connect**

**Error:** "Could not connect to server"

**Solutions:**
1. Check FTP credentials are correct:
   - Host: `141.136.39.103`
   - Username: `u270993738`
   - Password: `Waasay@123`
   - Port: `21`
2. Make sure Protocol is "FTP" (not SFTP)
3. Check internet connection
4. Try disabling firewall temporarily

### **Problem 2: Connection timeout**

**Solutions:**
1. Settings → Transfer → Connection
2. Increase timeout to 60 seconds
3. Reduce number of connections to 2

### **Problem 3: Upload fails**

**Solutions:**
1. Check internet connection
2. Try uploading in smaller batches
3. Upload folders one by one
4. Check disk space on Hostinger

### **Problem 4: .htaccess not visible**

**Solutions:**
1. View → Show Hidden Files
2. .htaccess should appear

### **Problem 5: Permission denied**

**Solutions:**
1. Check FTP username/password correct hai
2. Make sure you're in public_html folder
3. Contact Hostinger support

---

## 📊 YOUR FTP CREDENTIALS:

```
Host: 141.136.39.103
Username: u270993738
Password: Waasay@123
Port: 21
Protocol: FTP (not SFTP)
Folder: public_html
```

---

## 🎯 QUICK CHECKLIST:

Before upload:
- [ ] SmartFTP installed
- [ ] FTP credentials ready
- [ ] HOSTINGER-UPLOAD folder ready

During upload:
- [ ] Connected to FTP
- [ ] Navigated to public_html
- [ ] Deleted old files
- [ ] Selected all files from HOSTINGER-UPLOAD
- [ ] Started upload
- [ ] Waited for completion
- [ ] Verified all files uploaded

After upload:
- [ ] Disconnected SmartFTP
- [ ] Cleared browser cache
- [ ] Tested website
- [ ] Checked animations
- [ ] Checked Industries hover effects
- [ ] Tested navigation
- [ ] Tested all pages

---

## 🚀 WHY SMARTFTP?

**Benefits:**
- ✅ Recommended by Hostinger
- ✅ Easy to use interface
- ✅ Fast upload speed
- ✅ Resume failed uploads
- ✅ Save connections
- ✅ Transfer queue management

---

## 📁 FILES TO UPLOAD:

**Location:** `D:\Personal projects\website-development-plan\HOSTINGER-UPLOAD\`

**Upload ALL files from this folder to public_html**

---

## 🎉 FINAL NOTES:

1. SmartFTP is Hostinger's recommended FTP client
2. Easy to setup and use
3. Upload all files from HOSTINGER-UPLOAD folder
4. All animations and features included
5. Exact localhost website

---

## 📞 NEED HELP?

Agar SmartFTP mein problem aaye to:
1. Screenshot bhejo
2. Batao kya error aa raha hai
3. Main help karunga

**Good luck bhai!** 🍀

---

## 🔗 DOWNLOAD LINK:

SmartFTP: https://www.smartftp.com/download

---

## ⚠️ ALTERNATIVE:

Agar SmartFTP paid version maange to:
- FileZilla use karo (completely free)
- Ya Hostinger File Manager use karo

**FileZilla Guide:** HOSTINGER-FTP-UPLOAD-GUIDE.md
**File Manager Guide:** SIMPLE-FILE-MANAGER-UPLOAD.md
