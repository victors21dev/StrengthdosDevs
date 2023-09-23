import sys
import json

print(json.dumps(
        {
            "nomecompleto": sys.argv[1], "sobrenome": sys.argv[2]
        }
    )
)