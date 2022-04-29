FROM linode/lamp

ENTRYPOINT service apache2 start && /bin/bash