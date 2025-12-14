import http.server
import socketserver
import socket
import webbrowser
import os

# Cấu hình Port (như trong README)
PORT = 8000

# Đảm bảo server phục vụ file từ đúng thư mục chứa script này
web_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(web_dir)

Handler = http.server.SimpleHTTPRequestHandler

def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # Kết nối thử đến DNS Google để xác định IP mạng LAN (không gửi dữ liệu thực)
        s.connect(('8.8.8.8', 80))
        IP = s.getsockname()[0]
    except Exception:
        IP = '127.0.0.1'
    finally:
        s.close()
    return IP

if __name__ == "__main__":
    # Cho phép tái sử dụng port ngay lập tức nếu khởi động lại nhanh
    socketserver.TCPServer.allow_reuse_address = True
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            local_ip = get_local_ip()
            print(f"--- Web App Luyện Thi & Học Tập ---")
            print(f"Server đang chạy tại: {web_dir}")
            print(f"Truy cập Local: http://localhost:{PORT}")
            print(f"Truy cập LAN:   http://{local_ip}:{PORT}")
            print("Nhấn Ctrl+C để dừng server.")
            
            # Tự động mở trình duyệt mặc định
            webbrowser.open(f"http://localhost:{PORT}")
            
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nĐã dừng server.")
    except Exception as e:
        print(f"Lỗi khởi động server: {e}")