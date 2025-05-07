import time
from http.server import SimpleHTTPRequestHandler, HTTPServer

# Ensure to run this example in 2 different chrome windows, or 2 different browsers.
class DelayedRequestHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        """Handles GET request with a 10-second delay."""
        print(f"Received request at: {round(time.time()) % 100}")
        
        # Simulating delay before responding
        time.sleep(10)
        
        # Sending response
        self.send_response(200)
        self.send_header("Content-type", "text/plain")
        self.end_headers()
        print(f"Sent response at: {round(time.time())%100}")
       
        self.wfile.write(b"Response after 10 seconds delay")

if __name__ == "__main__":
    HOST, PORT = "0.0.0.0", 8080  # Listen on all interfaces, port 8080
    server = HTTPServer((HOST, PORT), DelayedRequestHandler)

    print(f"Serving on http://{HOST}:{PORT} (Single-threaded)")
    
    try:
        server.serve_forever()  # Runs in a blocking loop (single-threaded)
    except KeyboardInterrupt:
        print("\nShutting down server.")
        server.server_close()