from ftplib import FTP
import os

# FTP Configuration
FTP_HOST = "141.136.39.103"
FTP_USER = "u270993739.velqatechologies.com"
FTP_PASS = "R;?xfQ!AaQhx5#Uv"
FTP_PORT = 21

LOCAL_DIR = r"D:\Personal projects\website-development-plan\out"
REMOTE_DIR = "/public_html"

def delete_folder_recursive(ftp, folder):
    """Delete folder recursively"""
    try:
        ftp.cwd(folder)
        items = ftp.nlst()
        for item in items:
            try:
                ftp.delete(item)
            except:
                delete_folder_recursive(ftp, item)
        ftp.cwd('..')
        ftp.rmd(folder)
    except:
        pass

def upload_directory(ftp, local_path):
    """Upload directory recursively"""
    items = os.listdir(local_path)
    
    for item in items:
        local_item = os.path.join(local_path, item)
        
        if os.path.isfile(local_item):
            print(f'📤 Uploading: {item}')
            try:
                with open(local_item, 'rb') as f:
                    ftp.storbinary(f'STOR {item}', f, blocksize=8192)
                print(f'   ✅ Done!')
            except Exception as e:
                print(f'   ❌ Error: {e}')
                
        elif os.path.isdir(local_item):
            print(f'📁 Creating folder: {item}')
            try:
                ftp.mkd(item)
            except:
                pass
            
            ftp.cwd(item)
            upload_directory(ftp, local_item)
            ftp.cwd('..')

# Main execution
print("=" * 60)
print("  VELQA TECHNOLOGIES - FTP UPLOAD")
print("=" * 60)

try:
    print(f'\n🔌 Connecting to: {FTP_HOST}')
    print(f'👤 Username: {FTP_USER}')
    
    ftp = FTP(timeout=300)
    ftp.connect(FTP_HOST, FTP_PORT)
    ftp.login(FTP_USER, FTP_PASS)
    
    print('✅ Connected successfully!')
    print(f'📂 Current directory: {ftp.pwd()}')
    
    # Change to public_html
    print(f'\n📂 Changing to {REMOTE_DIR}...')
    ftp.cwd(REMOTE_DIR)
    print(f'✅ Now in: {ftp.pwd()}')
    
    # Clean old files
    print('\n🗑️  Cleaning old files...')
    try:
        items = ftp.nlst()
        for item in items:
            try:
                ftp.delete(item)
                print(f'   Deleted: {item}')
            except:
                try:
                    delete_folder_recursive(ftp, item)
                    print(f'   Deleted folder: {item}')
                except:
                    print(f'   Could not delete: {item}')
    except Exception as e:
        print(f'   Cleanup done')
    
    # Upload files
    print('\n' + '=' * 60)
    print('  STARTING UPLOAD')
    print('=' * 60 + '\n')
    
    upload_directory(ftp, LOCAL_DIR)
    
    print('\n' + '=' * 60)
    print('  ✅ UPLOAD COMPLETE!')
    print('=' * 60)
    print('\n🌐 Website: https://velqatechologies.com/')
    print('💡 Press Ctrl+Shift+R to refresh')
    
    ftp.quit()
    
except Exception as e:
    print(f'\n❌ Error: {e}')
    import traceback
    traceback.print_exc()

input('\nPress Enter to exit...')